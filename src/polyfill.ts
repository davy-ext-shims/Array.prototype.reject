import implementation, { RejectPrototypeImplementation } from './implementation'

export default function getPolyfill(): RejectPrototypeImplementation {
  return implementation
}
