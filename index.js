'use strict';

/**
 *  Recurse to remove items from arr and push onto ret
 */
module.exports = function(a){
  var arr = a.slice();
  return (function random (arr, ret) {
    ret = ret || [];
    if (!arr.length) return ret;
    var item = arr.splice(randomIndex(arr), 1);
    ret.push(item[0]);
    return random(arr, ret);
  }(arr));
};

/**
 *  Get a random index from an array
 */
function randomIndex (arr) {
  return num(arr.length);
};

/**
 *  Generate a random number
 */
function num (max) {
  return Math.floor(Math.random()*(max));
};
