/*jslint node: true, vars: true, evil: true, bitwise: true */
'use strict';
/* global mAllObjects, gEngine */

var gObjectNum = 0;
function userControl(event) {
  var keycode;

  if (window.event) {
    //alert('ie');
    keycode = event.keyCode;
  } else if (event.which) {
    //alert('firefox ');
    keycode = event.which;
  }
  if (keycode >= 48 && keycode <= 57) {
    if (keycode - 48 < gEngine.Core.mAllObjects.length) {
      gObjectNum = keycode - 48;
    }
  }
  if (keycode === 70) {
    //f
    var r1 = new Rectangle(
      new Vec2(
        gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
        gEngine.Core.mAllObjects[gObjectNum].mCenter.y
      ),
      Math.random() * 30 + 10,
      Math.random() * 30 + 10,
      Math.random() * 30,
      Math.random(),
      Math.random()
    );
    r1.mVelocity = new Vec2(
      Math.random() * 300 - 150,
      Math.random() * 300 - 150
    );
  }
  if (keycode === 71) {
    //g
    var r1 = new Circle(
      new Vec2(
        gEngine.Core.mAllObjects[gObjectNum].mCenter.x,
        gEngine.Core.mAllObjects[gObjectNum].mCenter.y
      ),
      Math.random() * 10 + 20,
      Math.random() * 30,
      Math.random(),
      Math.random()
    );
    r1.mVelocity = new Vec2(
      Math.random() * 300 - 150,
      Math.random() * 300 - 150
    );
  }

  if (keycode === 72) {
    //H
    var i;
    for (i = 0; i < gEngine.Core.mAllObjects.length; i++) {
      if (gEngine.Core.mAllObjects[i].mInvMass !== 0) {
        gEngine.Core.mAllObjects[i].mVelocity = new Vec2(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250
        );
      }
    }
  }
  if (keycode === 82) {
    //R
    gEngine.Core.mAllObjects.splice(4, gEngine.Core.mAllObjects.length);
    gObjectNum = 0;
  }
}
