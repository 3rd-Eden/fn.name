describe('fn.name', function () {
  'use strict';

  var assume = require('assume')
    , name = require('./');

  it('is exported as a function', function () {
    assume(name).is.a('function');
  });

  it('can extract the name from a function declaration', function () {
    function foobar() {}

    assume(name(foobar)).equals('foobar');
  });

  it('can extract the name from a function expression', function () {
    var a = function bar() {};

    assume(name(a)).equals('bar');
  });

  it('can be overriden using displayName', function () {
    var a = function bar() {};
    a.displayName = 'bro';

    assume(name(a)).equals('bro');
  });

  it('works with constructed instances', function () {
    function Bar(){}

    var foo = new Bar();

    assume(name(foo)).equals('Bar');
  });

  it('works with anonymous', function () {
    assume(name(function () {})).equals('anonymous');
  });

  it('returns the className if we were not given a function', function () {
    assume(name('string')).equals('String');
  });
});
