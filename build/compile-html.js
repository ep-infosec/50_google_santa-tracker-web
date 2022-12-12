/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const dom = require('./dom.js');
const {minify} = require('html-minifier');
const terser = require('terser');


/**
 * @param {string} filename
 * @param {{
 *   compile: boolean,
 *   messages: function(string): string,
 *   body: (!Object<string, string>|undefined),
 * }}
 */
module.exports = async (filename, options) => {
  const document = await dom.read(filename);

  // apply data-key attributes to body
  if (options.body) {
    Object.keys(options.body).forEach((key) => {
      const value = options.body[key];
      if (value != null || value !== false) {
        document.body.setAttribute(`data-${key}`, value === true ? '' : value);
      }
    });
  }

  // replace all [msgid] strings
  const msgs = Array.from(document.querySelectorAll('[msgid]'));
  msgs.forEach((node) => {
    const string = options.messages(node.getAttribute('msgid'));

    if (node.localName === 'meta') {
      node.setAttribute('content', string);
    } else if (node.closest('head') && node.localName !== 'title') {
      throw new Error(`unhandled <head> node: ${node.localName}`);
    } else {
      node.innerHTML = string;
    }

    node.removeAttribute('msgid');
  });

  // return early if not compiling
  if (!options.compile) {
    return dom.serialize(document);
  }

  const out = dom.serialize(document);
  const mo = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    includeAutoGeneratedTags: false,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: (code) => {
      // nb. html-minifier does NOT see scripts of `type="module"`, which is fine for now as they
      // should be compiled away only in production anyway.
      const result = terser.minify(code);
      if (result.error) {
        throw new Error(`terser error: ${result.error}`);
      }
      return result.code;
    },
    removeRedundantAttributes: true,
    sortAttributes: true,
    sortClassName: true,
  };
  return minify(out, mo);
};