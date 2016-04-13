# to-upper

> Converts string, as a whole, to upper case.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/to-upper/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/to-upper/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/to-upper)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/to-upper/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/to-upper)


## Install

```
$ npm install --save to-upper 
```


## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/to-upper/blob/master/test/spec/index.js)

```js
var toUpper = require('to-upper');

toUpper('ABC');          // => 'ABC'
toUpper('--foo-bar--');  // => '--FOO-BAR--'
toUpper('fooBar');       // => 'FOOBAR'
toUpper('__foo_bar__');  // => '__FOO_BAR__'
```

## Related

- [to-num](https://github.com/bubkoo/to-num) - Converts the given value to a number.
- [to-integer](https://github.com/bubkoo/to-integer) - Converts the given value to an integer.
- [to-length](https://github.com/bubkoo/to-length) - Converts value to an integer suitable for use as the length of an array-like object.
- [to-str](https://github.com/bubkoo/to-str) - Converts the given value to a string.
- [to-lower](https://github.com/bubkoo/to-lower) - Converts string, as a whole, to lower case.
- [to-path](https://github.com/bubkoo/to-path) - Converts value to a property path array. 
- [to-source-code](https://github.com/bubkoo/to-source-code.git) - Converts function to its source code.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/to-upper/issues/new).
