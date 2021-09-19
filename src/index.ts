import RequireObjectCoercible from 'es-abstract/2020/RequireObjectCoercible'

import callBound from 'call-bind/callBound'
import define from 'define-properties'

import implementation, { RejectPrototypeImplementation } from './implementation'
import getPolyfill from './polyfill'
import shim from './shim'

const polyfill = getPolyfill()
const Array$slice = callBound('Array.prototype.slice')

const bound = function reject<T>(array: T[]): [] {
  RequireObjectCoercible(array)
  // eslint-disable-next-line prefer-rest-params
  return polyfill.apply(array, Array$slice(arguments, 1))
} as unknown as RejectPrototypeImplementation

export default define(bound, {
  getPolyfill,
  implementation,
  shim,
})
