# fn.name

[![From bigpipe.io][from]](http://bigpipe.io)[![Version npm][version]](http://browsenpm.org/package/fn.name)[![Build Status][build]](https://travis-ci.org/bigpipe/fn.name)[![Dependencies][david]](https://david-dm.org/bigpipe/fn.name)[![Coverage Status][cover]](https://coveralls.io/r/bigpipe/fn.name?branch=master)

[from]: https://img.shields.io/badge/from-bigpipe.io-9d8dff.svg?style=flat-square
[version]: http://img.shields.io/npm/v/fn.name.svg?style=flat-square
[build]: http://img.shields.io/travis/bigpipe/fn.name/master.svg?style=flat-square
[david]: https://img.shields.io/david/bigpipe/fn.name.svg?style=flat-square
[cover]: http://img.shields.io/coveralls/bigpipe/fn.name/master.svg?style=flat-square

Extract the name of a given function. Nothing more than that.

## Installation 

This module is compatible with Browserify and Node.js and can be installed
using:

```
npm install --save fn.name
```

## Usage

Using this module is super simple, it exposes the function directly on the
exports so it can be required as followed:

```js
'use strict';

var name = require('fn.name');
```

Now that we have the `name` function we can pass it functions:

```js
console.log(name(function foo() {})) // foo
```

And that's it folks!

## License

MIT
