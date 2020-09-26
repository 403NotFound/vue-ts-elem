import { CTX } from '../utils/interface'

export default {
  changeAddress(ctx: CTX, address: string) {
    ctx.commit('changeAddress', address)
  }
}
