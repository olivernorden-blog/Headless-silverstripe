export const state = () => ({
  main: {},
  currentPage: {}
})

export const getters = {
  navigation: state => state.main.Navigation,
  siteconfig: state => state.main.SiteConfig,
  currentPage: state => state.currentPage
}

export const actions = {
  async nuxtServerInit ({ commit }, { $axios, query }) {
    let apiTarget = 'api/common'

    if (query.stage) {
      const queryString = `?stage=${query.stage}`
      apiTarget += queryString
    }

    const { data } = await $axios.get(apiTarget)
    commit('setCommonData', data)
  }
}

export const mutations = {
  setCommonData (state, payload) {
    state.main = payload
  },
  setCurrentPage (state, payload) {
    state.currentPage = payload
  }
}