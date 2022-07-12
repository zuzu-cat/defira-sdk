import { ONE } from './one'

describe('ONE', () => {
  it('static constructor uses cache', () => {
    expect(ONE.onChain(1666600000) === ONE.onChain(1666600000)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(ONE.onChain(1666600000) !== ONE.onChain(1666600001)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(ONE.onChain(1666600000).equals(ONE.onChain(1666600001))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(ONE.onChain(1666600000).equals(ONE.onChain(1666600000))).toEqual(true)
  })
})
