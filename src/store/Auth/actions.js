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
  },
  authenticateAccount ({ commit, dispatch }, payload) {
    if (typeof payload === 'object') {
      commit('USER', payload)
      dispatch('hideAuthForm')
      console.log(this)
    }
  },
  logOut ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('USER', null)
      resolve({
        data: {
          logout: true,
          message: 'User logged out.'
        }
      })
    })
  }
}
