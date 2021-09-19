import { RejectImplementation } from './implementation'
import shim from './shim'

declare global {
  interface Array<T> {
    reject: RejectImplementation<T>
  }
}

shim()
