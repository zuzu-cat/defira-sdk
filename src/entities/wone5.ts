import { Token } from '@uniswap/sdk-core'

/**
 * Known WONE implementation addresses, used in our implementation of Ether#wrapped
 */
export const WONE: { [chainId: number]: Token } = {
  1666600000: new Token(1666600000, '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18, 'WONE', 'Wrapped ONE'),
  1666600001: new Token(1666600001, '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18, 'WONE', 'Wrapped ONE'),
  1666600002: new Token(1666600002, '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18, 'WONE', 'Wrapped ONE'),
  1666600003: new Token(1666600003, '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18, 'WONE', 'Wrapped ONE'),

  1666700000: new Token(1666700000, '0x7466d7d0c21fa05f32f5a0fa27e12bdc06348ce2', 18, 'WONE', 'Wrapped ONE')
}
