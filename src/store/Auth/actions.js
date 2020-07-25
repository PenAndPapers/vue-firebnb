export const actions = {
  showLogin ({ commit }) {
    commit('IS_LOGIN', true)
    commit('IS_REGISTER', false)
  },
  showRegistration ({ commit }) {
    commit('IS_REGISTER', true)
    commit('IS_LOGIN', false)
  },
  hideAuthForm ({ commit }) {
    commit('IS_LOGIN', false)
    commit('IS_REGISTER', false)
  }
}
