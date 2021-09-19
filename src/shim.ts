import define from 'define-properties'

import getPolyfill from './polyfill'

export default (): void => {
  const polyfill = getPolyfill()
  define(
    Array.prototype,
    { reject: polyfill },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { reject: () => (Array.prototype as any)['reject'] !== polyfill }
  )
}
