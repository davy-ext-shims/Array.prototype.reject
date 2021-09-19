# array.prototype.reject

[![type annotation][type-anno-svg]][package-url]
[![npm version][npm-version-svg]][package-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]

An intuitive method, `Array.prototype.reject`, shim/polyfill that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://davy-ext-shims.github.io/Array.prototype.reject/).

Because `Array.prototype.reject` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

When using TypeScript and import with `@davy-ext-shims/array.prototype.reject/auto`, global definition will be auto injected.

## Example

```js
var reject = require('@davy-ext-shims/array.prototype.reject')
var assert = require('assert')

assert.deepEqual(
  reject([1, 2, 3], function (x) {
    return x > 2
  }),
  [1, 2]
)
assert.deepEqual(
  reject([1, 2, 3], function (x) {
    return x < 2
  }),
  [2, 3]
)
```

```js
var reject = require('@davy-ext-shims/array.prototype.reject')
var assert = require('assert')
var shimmedReject = reject.shim()
assert.equal(shimmedReject, reject.getPolyfill())
var arr = [1, 2, 3]
var isOdd = function (x) {
  return x % 2 !== 0
}
assert.deepEqual(arr.reject(isOdd), reject(arr, isOdd))
```

## Tests

Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/@davy-ext-shims/array.prototype.reject
[type-anno-svg]: https://img.shields.io/npm/types/@davy-ext-shims/array.prototype.reject.svg
[npm-version-svg]: https://img.shields.io/npm/v/@davy-ext-shims/array.prototype.reject.svg
[deps-svg]: https://david-dm.org/davy-ext-shims/Array.prototype.reject.svg
[deps-url]: https://david-dm.org/davy-ext-shims/Array.prototype.reject
[dev-deps-svg]: https://david-dm.org/davy-ext-shims/Array.prototype.reject/dev-status.svg
[dev-deps-url]: https://david-dm.org/davy-ext-shims/Array.prototype.reject#info=devDependencies
[license-image]: https://img.shields.io/npm/l/@davy-ext-shims/array.prototype.reject.svg
[license-url]: LICENSE
