import { CTX } from '../utils/interface'

export default {
  changeAddress(ctx: CTX, address: string) {
    ctx.commit('changeAddress', address)
  },
  changeOpacity(ctx: CTX, opacity: number) {
    ctx.commit('changeOpacity', opacity)
  }
}
