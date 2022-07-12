import invariant from 'tiny-invariant'
import { Currency, NativeCurrency, Token } from '@uniswap/sdk-core'
import { WONE } from './wone5'

/**
 * ONE is the main usage of a 'native' currency, i.e. for ONEeum mainnet and all testnets
 */
export class ONE extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'ONE', 'ONE')
  }

  public get wrapped(): Token {
    const wone = WONE[this.chainId]
    invariant(!!wone, 'WRAPPED')
    return wone
  }

  private static _oneCache: { [chainId: number]: ONE } = {}

  public static onChain(chainId: number): ONE {
    return this._oneCache[chainId] ?? (this._oneCache[chainId] = new ONE(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
