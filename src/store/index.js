import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 1,
    itemsPerPage: 5,
    categories: [
      "health",
      "transport",
      "food",
      "study",
    ],
    paymentsList: [
      { id: 1, category: "food", data: "08.11.2022", count: 235 },
      { id: 2, category: "food", data: "10.11.2022", count: 340 },
      { id: 3, category: "food", data: "12.11.2022", count: 410 },
      { id: 4, category: "food", data: "08.11.2022", count: 235 },
    ],
  },
  getters: {
    getCategoriesList: (state) => state.categories,
    getPaymentsList: (state) => {
      state.paymentsList
      const pageCount = state.paymentsList.length / state.itemsPerPage
      const startIdx = (state.page - 1) * state.itemsPerPage
      const endIdx = (startIdx + state.itemsPerPage <= state.paymentsList.length) ? startIdx + state.itemsPerPage : state.paymentsList.length
      return state.paymentsList.slice(startIdx, endIdx)
    },
    getId: state => {
      return (state.paymentsList.length + 1)
    },
  },
  mutations: {
    setPage: (state, pageNum) => { state.page = pageNum },
    nextPage: (state) => { state.page = ++state.page },
    prevPage: (state) => { state.page-- },
    addPayment: (state, payload) =>
      state.paymentsList.push(payload),
    editCostsList: (state, payload) => (state.paymentsList = state.paymentsList.map((item) => {
      if (item.id === payload.id) {
        console.log(payload)
        return payload;
      } else {
        return item
      }
    })),
    removeCostsList: (state, payload) => state.paymentsList.splice(
      state.paymentsList.indexOf(payload),
      1
    ),
  },
  actions: {
  },
  modules: {
  }
})
