'use strict';

var assert = require('assert');
var arrandom = require('./');

describe('arr()', function(){
  it('randomizes an array', function(){
    var arr = [0, 1, 2, 3, 4, 5];
    var a = arrandom(arr);
    assert.ok(a instanceof Array);
    // i guess?
    assert.ok(a[0] != 0 || a[1] != 1 || a[2] != 2 || a[3] != 3);
    assert.equal(a.length, arr.length);
  });
});

describe('arr()', function(){
  it('randomizes an array', function(){
    var arr = ['tj', 'robb', 'stephen', 'mike', 'chris'];
    var a = arrandom(arr);
    assert.ok(a instanceof Array);
    // i guess?
    assert.ok(a[0] != 'tj' || a[1] != 'robb' || a[2] != 'stephen' || a[3] != 'mike');
    assert.equal(a.length, arr.length);
  });
});
