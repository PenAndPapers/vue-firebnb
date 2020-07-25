export const mutations = {
  USER (state, payload) {
    state.user = payload
  },
  IS_LOGIN (state, payload) {
    state.isLogin = payload
  },
  IS_REGISTER (state, payload) {
    state.isRegister = payload
  }
}
