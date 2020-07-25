export const actions = {
  showLogin ({ commit }, payload) {
    commit('IS_LOGIN', payload)
  },
  showRegistration ({ commit }, payload) {
    commit('IS_REGISTER', payload)
  }
}
