'use strict';

var toString = Object.prototype.toString;

/**
 * Get class information for a given type.
 *
 * @param {Mixed} of Type to check.
 * @returns {String} The name of the type.
 * @api private
 */
function type(of) {
  return toString.call(of).slice(8, -1).toLowerCase();
}

/**
 * Extract names from functions.
 *
 * @param {Function} fn The function who's name we need to extract.
 * @returns {String}
 * @api public
 */
module.exports = function name(fn) {
  if ('string' === typeof fn.displayName && fn.constructor.name) {
    return fn.displayName;
  } else if ('string' === typeof fn.name && fn.name) {
    return fn.name;
  }

  //
  // Check to see if the constructor has a name.
  //
  if (
       'object' === typeof fn
    && fn.constructor
    && 'string' === typeof fn.constructor.name
  ) return fn.constructor.name;

  //
  // toString the given function and attempt to parse it out of it, or determine
  // the class.
  //
  var named = fn.toString();

  if ('function' === type(fn)) {
    named = named.substring(named.indexOf('(') + 1, named.indexOf(')'));
  } else {
    named = toString.call(fn).slice(8, -1);
  }

  return named || 'anonymous';
};
