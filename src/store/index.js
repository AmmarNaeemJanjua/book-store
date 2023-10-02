import { createStore } from 'vuex'

export default createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state, book) {
      state.cartItems.push(book);
    },
    removeFromCart(state, book) {
      state.cartItems = state.cartItems.filter(item => item.id !== book.id);
    },
  },
  actions: {
    addToCart({ commit }, book) {
      commit('addToCart', book);
    },
    removeFromCart({ commit }, book) {
      commit('removeFromCart', book);
    },
  },
  getters: {
    getCartItems: state => state.cartItems,
  },
});