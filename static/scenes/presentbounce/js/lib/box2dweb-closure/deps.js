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

// This file was autogenerated by closure-library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../src/base.js', ['Box2D.generateCallback'], []);
goog.addDependency('../../../src/collision/ClipVertex.js', ['Box2D.Collision.ClipVertex'], ['Box2D.Collision.b2ContactID', 'Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/IBroadPhase.js', ['Box2D.Collision.IBroadPhase'], []);
goog.addDependency('../../../src/collision/b2AABB.js', ['Box2D.Collision.b2AABB'], ['Box2D.Common.Math.b2Vec2']);
goog.addDependency('../../../src/collision/b2Collision.js', ['Box2D.Collision.b2Collision'], ['Box2D.Collision.ClipVertex', 'Box2D.Collision.b2Manifold', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings']);
goog.addDependency('../../../src/collision/b2ContactID.js', ['Box2D.Collision.b2ContactID'], ['UsageTracker']);
goog.addDependency('../../../src/collision/b2ContactPoint.js', ['Box2D.Collision.b2ContactPoint'], ['Box2D.Collision.b2ContactID', 'Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2Distance.js', ['Box2D.Collision.b2Distance'], ['Box2D.Collision.b2Simplex', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings']);
goog.addDependency('../../../src/collision/b2DistanceInput.js', ['Box2D.Collision.b2DistanceInput'], ['UsageTracker']);
goog.addDependency('../../../src/collision/b2DistanceOutput.js', ['Box2D.Collision.b2DistanceOutput'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2DistanceProxy.js', ['Box2D.Collision.b2DistanceProxy'], ['Box2D.Common.b2Settings', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2DynamicTree.js', ['Box2D.Collision.b2DynamicTree'], ['Box2D.Collision.b2AABB', 'Box2D.Collision.b2DynamicTreeNode', 'Box2D.Collision.b2RayCastInput', 'Box2D.Common.Math.b2Math', 'Box2D.Common.b2Settings', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2DynamicTreeBroadPhase.js', ['Box2D.Collision.b2DynamicTreeBroadPhase'], ['Box2D.Collision.IBroadPhase', 'Box2D.Collision.b2DynamicTree', 'Box2D.Collision.b2DynamicTreePair', 'UsageTracker', 'goog.array']);
goog.addDependency('../../../src/collision/b2DynamicTreeNode.js', ['Box2D.Collision.b2DynamicTreeNode'], ['Box2D.Collision.b2AABB', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2DynamicTreePair.js', ['Box2D.Collision.b2DynamicTreePair'], ['UsageTracker']);
goog.addDependency('../../../src/collision/b2Manifold.js', ['Box2D.Collision.b2Manifold'], ['Box2D.Collision.b2ManifoldPoint', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2ManifoldPoint.js', ['Box2D.Collision.b2ManifoldPoint'], ['Box2D.Collision.b2ContactID', 'Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2RayCastInput.js', ['Box2D.Collision.b2RayCastInput'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2RayCastOutput.js', ['Box2D.Collision.b2RayCastOutput'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2Segment.js', ['Box2D.Collision.b2Segment'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2SeparationFunction.js', ['Box2D.Collision.b2SeparationFunction'], ['Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2Simplex.js', ['Box2D.Collision.b2Simplex'], ['Box2D.Collision.b2SimplexVertex', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2SimplexCache.js', ['Box2D.Collision.b2SimplexCache'], ['UsageTracker']);
goog.addDependency('../../../src/collision/b2SimplexVertex.js', ['Box2D.Collision.b2SimplexVertex'], ['UsageTracker']);
goog.addDependency('../../../src/collision/b2TOIInput.js', ['Box2D.Collision.b2TOIInput'], ['Box2D.Collision.b2DistanceProxy', 'Box2D.Common.Math.b2Sweep', 'UsageTracker']);
goog.addDependency('../../../src/collision/b2TimeOfImpact.js', ['Box2D.Collision.b2TimeOfImpact'], ['Box2D.Collision.b2Distance', 'Box2D.Collision.b2DistanceInput', 'Box2D.Collision.b2DistanceOutput', 'Box2D.Collision.b2SeparationFunction', 'Box2D.Collision.b2SimplexCache', 'Box2D.Common.Math.b2Transform', 'Box2D.Common.b2Settings']);
goog.addDependency('../../../src/collision/b2WorldManifold.js', ['Box2D.Collision.b2WorldManifold'], ['Box2D.Collision.b2Manifold', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'UsageTracker']);
goog.addDependency('../../../src/collision/shapes/b2CircleShape.js', ['Box2D.Collision.Shapes.b2CircleShape'], ['Box2D.Collision.Shapes.b2Shape', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/shapes/b2EdgeChainDef.js', ['Box2D.Collision.Shapes.b2EdgeChainDef'], ['UsageTracker']);
goog.addDependency('../../../src/collision/shapes/b2EdgeShape.js', ['Box2D.Collision.Shapes.b2EdgeShape'], ['Box2D.Collision.Shapes.b2Shape', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'UsageTracker']);
goog.addDependency('../../../src/collision/shapes/b2MassData.js', ['Box2D.Collision.Shapes.b2MassData'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/collision/shapes/b2PolygonShape.js', ['Box2D.Collision.Shapes.b2PolygonShape'], ['Box2D.Collision.Shapes.b2MassData', 'Box2D.Collision.Shapes.b2Shape', 'Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Transform', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'UsageTracker']);
goog.addDependency('../../../src/collision/shapes/b2Shape.js', ['Box2D.Collision.Shapes.b2Shape'], ['Box2D.Collision.b2Distance', 'Box2D.Collision.b2DistanceInput', 'Box2D.Collision.b2DistanceOutput', 'Box2D.Collision.b2DistanceProxy', 'Box2D.Collision.b2SimplexCache', 'UsageTracker']);
goog.addDependency('../../../src/common/b2Color.js', ['Box2D.Common.b2Color'], ['Box2D.Common.Math.b2Math', 'UsageTracker']);
goog.addDependency('../../../src/common/b2Settings.js', ['Box2D.Common.b2Settings'], []);
goog.addDependency('../../../src/common/math/b2Mat22.js', ['Box2D.Common.Math.b2Mat22'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/common/math/b2Mat33.js', ['Box2D.Common.Math.b2Mat33'], ['Box2D.Common.Math.b2Vec3', 'UsageTracker']);
goog.addDependency('../../../src/common/math/b2Math.js', ['Box2D.Common.Math.b2Math'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Vec2']);
goog.addDependency('../../../src/common/math/b2Sweep.js', ['Box2D.Common.Math.b2Sweep'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/common/math/b2Transform.js', ['Box2D.Common.Math.b2Transform'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/common/math/b2Vec2.js', ['Box2D.Common.Math.b2Vec2'], ['UsageTracker']);
goog.addDependency('../../../src/common/math/b2Vec3.js', ['Box2D.Common.Math.b2Vec3'], ['UsageTracker']);
goog.addDependency('../../../src/consts.js', ['Box2D.Consts'], []);
goog.addDependency('../../../src/dynamics/b2Body.js', ['Box2D.Dynamics.b2Body'], ['Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Sweep', 'Box2D.Common.Math.b2Transform', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Contacts.b2ContactList', 'Box2D.Dynamics.Controllers.b2ControllerList', 'Box2D.Dynamics.b2BodyDef', 'Box2D.Dynamics.b2Fixture', 'Box2D.Dynamics.b2FixtureDef', 'Box2D.Dynamics.b2FixtureList', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2BodyDef.js', ['Box2D.Dynamics.b2BodyDef'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2BodyList.js', ['Box2D.Dynamics.b2BodyList'], ['Box2D.Dynamics.b2BodyListNode', 'UsageTracker', 'goog.array']);
goog.addDependency('../../../src/dynamics/b2BodyListNode.js', ['Box2D.Dynamics.b2BodyListNode'], ['UsageTracker']);
goog.addDependency('../../../src/dynamics/b2ContactFilter.js', ['Box2D.Dynamics.b2ContactFilter'], ['Box2D.Dynamics.iContactFilter', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2ContactImpulse.js', ['Box2D.Dynamics.b2ContactImpulse'], ['UsageTracker']);
goog.addDependency('../../../src/dynamics/b2ContactListener.js', ['Box2D.Dynamics.b2ContactListener'], ['Box2D.Dynamics.iContactListener', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2ContactManager.js', ['Box2D.Dynamics.b2ContactManager'], ['Box2D.Collision.b2ContactPoint', 'Box2D.Collision.b2DynamicTreeBroadPhase', 'Box2D.Dynamics.Contacts.b2ContactFactory', 'Box2D.Dynamics.b2ContactFilter', 'Box2D.Dynamics.b2ContactListener', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2DebugDraw.js', ['Box2D.Dynamics.b2DebugDraw'], ['UsageTracker']);
goog.addDependency('../../../src/dynamics/b2DestructionListener.js', ['Box2D.Dynamics.b2DestructionListener'], []);
goog.addDependency('../../../src/dynamics/b2FilterData.js', ['Box2D.Dynamics.b2FilterData'], ['UsageTracker']);
goog.addDependency('../../../src/dynamics/b2Fixture.js', ['Box2D.Dynamics.b2Fixture'], ['Box2D.Collision.Shapes.b2MassData', 'Box2D.Collision.b2AABB', 'Box2D.Common.Math.b2Math', 'Box2D.Dynamics.b2FilterData', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2FixtureDef.js', ['Box2D.Dynamics.b2FixtureDef'], ['Box2D.Dynamics.b2FilterData', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2FixtureList.js', ['Box2D.Dynamics.b2FixtureList'], ['Box2D.Dynamics.b2FixtureListNode', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2FixtureListNode.js', ['Box2D.Dynamics.b2FixtureListNode'], ['UsageTracker']);
goog.addDependency('../../../src/dynamics/b2Island.js', ['Box2D.Dynamics.b2Island'], ['Box2D.Common.Math.b2Math', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.b2BodyDef', 'Box2D.Dynamics.b2ContactImpulse', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/b2TimeStep.js', ['Box2D.Dynamics.b2TimeStep'], ['UsageTracker']);
goog.addDependency('../../../src/dynamics/b2World.js', ['Box2D.Dynamics.b2World'], ['Box2D.Collision.Shapes.b2EdgeShape', 'Box2D.Collision.Shapes.b2Shape', 'Box2D.Collision.b2AABB', 'Box2D.Collision.b2RayCastInput', 'Box2D.Collision.b2RayCastOutput', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Sweep', 'Box2D.Common.Math.b2Transform', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Color', 'Box2D.Dynamics.Contacts.b2ContactList', 'Box2D.Dynamics.Contacts.b2ContactSolver', 'Box2D.Dynamics.Controllers.b2ControllerList', 'Box2D.Dynamics.Joints.b2DistanceJoint', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2MouseJoint', 'Box2D.Dynamics.Joints.b2PulleyJoint', 'Box2D.Dynamics.b2Body', 'Box2D.Dynamics.b2BodyDef', 'Box2D.Dynamics.b2BodyList', 'Box2D.Dynamics.b2ContactManager', 'Box2D.Dynamics.b2DebugDraw', 'Box2D.Dynamics.b2Island', 'Box2D.Dynamics.b2TimeStep', 'goog.structs.Queue']);
goog.addDependency('../../../src/dynamics/contacts/b2CircleContact.js', ['Box2D.Dynamics.Contacts.b2CircleContact'], ['Box2D.Collision.b2Collision', 'Box2D.Dynamics.Contacts.b2Contact']);
goog.addDependency('../../../src/dynamics/contacts/b2Contact.js', ['Box2D.Dynamics.Contacts.b2Contact'], ['Box2D.Collision.Shapes.b2Shape', 'Box2D.Collision.b2Manifold', 'Box2D.Collision.b2TOIInput', 'Box2D.Collision.b2TimeOfImpact', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.b2BodyDef', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/contacts/b2ContactConstraint.js', ['Box2D.Dynamics.Contacts.b2ContactConstraint'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Contacts.b2ContactConstraintPoint', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/contacts/b2ContactConstraintPoint.js', ['Box2D.Dynamics.Contacts.b2ContactConstraintPoint'], ['Box2D.Common.Math.b2Vec2', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/contacts/b2ContactFactory.js', ['Box2D.Dynamics.Contacts.b2ContactFactory'], ['Box2D.Collision.Shapes.b2CircleShape', 'Box2D.Collision.Shapes.b2EdgeShape', 'Box2D.Collision.Shapes.b2PolygonShape', 'Box2D.Dynamics.Contacts.b2CircleContact', 'Box2D.Dynamics.Contacts.b2ContactRegister', 'Box2D.Dynamics.Contacts.b2EdgeAndCircleContact', 'Box2D.Dynamics.Contacts.b2PolyAndCircleContact', 'Box2D.Dynamics.Contacts.b2PolyAndEdgeContact', 'Box2D.Dynamics.Contacts.b2PolygonContact', 'UsageTracker']);
goog.addDependency('../../../src/dynamics/contacts/b2ContactList.js', ['Box2D.Dynamics.Contacts.b2ContactList'], ['Box2D.Dynamics.Contacts.b2ContactListNode', 'goog.array']);
goog.addDependency('../../../src/dynamics/contacts/b2ContactListNode.js', ['Box2D.Dynamics.Contacts.b2ContactListNode'], []);
goog.addDependency('../../../src/dynamics/contacts/b2ContactRegister.js', ['Box2D.Dynamics.Contacts.b2ContactRegister'], []);
goog.addDependency('../../../src/dynamics/contacts/b2ContactSolver.js', ['Box2D.Dynamics.Contacts.b2ContactSolver'], ['Box2D.Collision.b2WorldManifold', 'Box2D.Common.Math.b2Math', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Contacts.b2ContactConstraint', 'Box2D.Dynamics.Contacts.b2PositionSolverManifold', 'Box2D.Dynamics.b2TimeStep']);
goog.addDependency('../../../src/dynamics/contacts/b2EdgeAndCircleContact.js', ['Box2D.Dynamics.Contacts.b2EdgeAndCircleContact'], ['Box2D.Collision.b2Collision', 'Box2D.Dynamics.Contacts.b2Contact']);
goog.addDependency('../../../src/dynamics/contacts/b2PolyAndCircleContact.js', ['Box2D.Dynamics.Contacts.b2PolyAndCircleContact'], ['Box2D.Collision.Shapes.b2CircleShape', 'Box2D.Collision.Shapes.b2PolygonShape', 'Box2D.Collision.b2Collision', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Contacts.b2Contact']);
goog.addDependency('../../../src/dynamics/contacts/b2PolyAndEdgeContact.js', ['Box2D.Dynamics.Contacts.b2PolyAndEdgeContact'], ['Box2D.Collision.Shapes.b2EdgeShape', 'Box2D.Collision.Shapes.b2PolygonShape', 'Box2D.Collision.b2Collision', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Contacts.b2Contact']);
goog.addDependency('../../../src/dynamics/contacts/b2PolygonContact.js', ['Box2D.Dynamics.Contacts.b2PolygonContact'], ['Box2D.Collision.b2Collision', 'Box2D.Dynamics.Contacts.b2Contact']);
goog.addDependency('../../../src/dynamics/contacts/b2PositionSolverManifold.js', ['Box2D.Dynamics.Contacts.b2PositionSolverManifold'], ['Box2D.Collision.b2Manifold', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings']);
goog.addDependency('../../../src/dynamics/controllers/b2BuoyancyController.js', ['Box2D.Dynamics.Controllers.b2BuoyancyController'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Color', 'Box2D.Dynamics.Controllers.b2Controller']);
goog.addDependency('../../../src/dynamics/controllers/b2ConstantAccelController.js', ['Box2D.Dynamics.Controllers.b2ConstantAccelController'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Controllers.b2Controller']);
goog.addDependency('../../../src/dynamics/controllers/b2ConstantForceController.js', ['Box2D.Dynamics.Controllers.b2ConstantForceController'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Controllers.b2Controller']);
goog.addDependency('../../../src/dynamics/controllers/b2Controller.js', ['Box2D.Dynamics.Controllers.b2Controller'], ['Box2D.Dynamics.b2BodyList']);
goog.addDependency('../../../src/dynamics/controllers/b2ControllerList.js', ['Box2D.Dynamics.Controllers.b2ControllerList'], ['Box2D.Dynamics.Controllers.b2ControllerListNode']);
goog.addDependency('../../../src/dynamics/controllers/b2ControllerListNode.js', ['Box2D.Dynamics.Controllers.b2ControllerListNode'], []);
goog.addDependency('../../../src/dynamics/controllers/b2GravityController.js', ['Box2D.Dynamics.Controllers.b2GravityController'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Controllers.b2Controller']);
goog.addDependency('../../../src/dynamics/controllers/b2TensorDampingController.js', ['Box2D.Dynamics.Controllers.b2TensorDampingController'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Controllers.b2Controller']);
goog.addDependency('../../../src/dynamics/iContactFilter.js', ['Box2D.Dynamics.iContactFilter'], []);
goog.addDependency('../../../src/dynamics/iContactListener.js', ['Box2D.Dynamics.iContactListener'], []);
goog.addDependency('../../../src/dynamics/joints/b2DistanceJoint.js', ['Box2D.Dynamics.Joints.b2DistanceJoint'], ['Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2DistanceJointDef.js', ['Box2D.Dynamics.Joints.b2DistanceJointDef'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2DistanceJoint', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef']);
goog.addDependency('../../../src/dynamics/joints/b2FrictionJoint.js', ['Box2D.Dynamics.Joints.b2FrictionJoint'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2FrictionJointDef.js', ['Box2D.Dynamics.Joints.b2FrictionJointDef'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2FrictionJoint', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef']);
goog.addDependency('../../../src/dynamics/joints/b2GearJoint.js', ['Box2D.Dynamics.Joints.b2GearJoint'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2Jacobian', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2GearJointDef.js', ['Box2D.Dynamics.Joints.b2GearJointDef'], ['Box2D.Dynamics.Joints.b2GearJoint', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef']);
goog.addDependency('../../../src/dynamics/joints/b2Jacobian.js', ['Box2D.Dynamics.Joints.b2Jacobian'], ['Box2D.Common.Math.b2Vec2']);
goog.addDependency('../../../src/dynamics/joints/b2Joint.js', ['Box2D.Dynamics.Joints.b2Joint'], ['Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2JointEdge']);
goog.addDependency('../../../src/dynamics/joints/b2JointDef.js', ['Box2D.Dynamics.Joints.b2JointDef'], ['Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2JointEdge.js', ['Box2D.Dynamics.Joints.b2JointEdge'], []);
goog.addDependency('../../../src/dynamics/joints/b2LineJoint.js', ['Box2D.Dynamics.Joints.b2LineJoint'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2LineJointDef.js', ['Box2D.Dynamics.Joints.b2LineJointDef'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef', 'Box2D.Dynamics.Joints.b2LineJoint']);
goog.addDependency('../../../src/dynamics/joints/b2MouseJoint.js', ['Box2D.Dynamics.Joints.b2MouseJoint'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2MouseJointDef.js', ['Box2D.Dynamics.Joints.b2MouseJointDef'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef', 'Box2D.Dynamics.Joints.b2MouseJoint']);
goog.addDependency('../../../src/dynamics/joints/b2PrismaticJoint.js', ['Box2D.Dynamics.Joints.b2PrismaticJoint'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Mat33', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.Math.b2Vec3', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2PrismaticJointDef.js', ['Box2D.Dynamics.Joints.b2PrismaticJointDef'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef', 'Box2D.Dynamics.Joints.b2PrismaticJoint']);
goog.addDependency('../../../src/dynamics/joints/b2PulleyJoint.js', ['Box2D.Dynamics.Joints.b2PulleyJoint'], ['Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2PulleyJointDef.js', ['Box2D.Dynamics.Joints.b2PulleyJointDef'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef', 'Box2D.Dynamics.Joints.b2PulleyJoint']);
goog.addDependency('../../../src/dynamics/joints/b2RevoluteJoint.js', ['Box2D.Dynamics.Joints.b2RevoluteJoint'], ['Box2D.Common.Math.b2Mat22', 'Box2D.Common.Math.b2Mat33', 'Box2D.Common.Math.b2Math', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.Math.b2Vec3', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2RevoluteJointDef.js', ['Box2D.Dynamics.Joints.b2RevoluteJointDef'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef', 'Box2D.Dynamics.Joints.b2RevoluteJoint']);
goog.addDependency('../../../src/dynamics/joints/b2WeldJoint.js', ['Box2D.Dynamics.Joints.b2WeldJoint'], ['Box2D.Common.Math.b2Mat33', 'Box2D.Common.Math.b2Vec2', 'Box2D.Common.Math.b2Vec3', 'Box2D.Common.b2Settings', 'Box2D.Dynamics.Joints.b2Joint']);
goog.addDependency('../../../src/dynamics/joints/b2WeldJointDef.js', ['Box2D.Dynamics.Joints.b2WeldJointDef'], ['Box2D.Common.Math.b2Vec2', 'Box2D.Dynamics.Joints.b2Joint', 'Box2D.Dynamics.Joints.b2JointDef', 'Box2D.Dynamics.Joints.b2WeldJoint']);
goog.addDependency('../../../src/usage_tracker.js', ['UsageTracker'], []);
