'use strict';

var assert = require('assert');
var arr = require('./');

describe('arr()', function(){
  it('randomizes an array', function(){
    var a = arr([0, 1, 2, 3, 4, 5]);
    assert.ok(a instanceof Array);
    // i guess?
    assert.ok(a[0] != 0 || a[1] != 1 || a[2] != 2 || a[3] != 3);
  });
});

describe('arr()', function(){
  it('randomizes an array', function(){
    var a = arr(['tj', 'robb', 'stephen', 'mike', 'chris']);
    assert.ok(a instanceof Array);
    // i guess?
    assert.ok(a[0] != 'tj' || a[1] != 'robb' || a[2] != 'stephen' || a[3] != 'mike');
  });
});
