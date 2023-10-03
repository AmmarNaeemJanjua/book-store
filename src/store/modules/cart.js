import axios from "axios";

const state = {
  cartItems: [],
};
const mutations = {
  addToCart(state, book) {
    // Check if the book is already in the cart
    const existingItem = state.cartItems.find(item => item.book.id === book.id);
    
    if (existingItem) {
      // If it's in the cart, increment the quantity
      existingItem.quantity++;
    } else {
      // If it's not in the cart, add it with quantity 1
      state.cartItems.push({ book, quantity: 1 });
    }
  },
  removeFromCart(state, book) {
    const index = state.cartItems.findIndex(item => item.book.id === book.id);
    if (index !== -1) {
      // Decrease the quantity or remove the item if quantity is 1
      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity--;
      } else {
        state.cartItems.splice(index, 1);
      }
    }
  },
};
const actions = {
  addToCart({ commit }, book) {
    commit("addToCart", book);
  },
  removeFromCart({ commit }, book) {
    commit("removeFromCart", book);
  },

  async confirmOrder(commit){
    try{
      const orderData = commit.rootState.cart.cartItems.map(item => ({
        book_id: item.book.id,
        quantity: item.quantity,
      }))

      const token = JSON.parse(localStorage.getItem('user-info')).token;

      const response = await axios.post("http://10.0.10.220:8080/api/confirm", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
      },
      });
      console.log(response.data.message);

    } catch (error){
      console.error("Error confirming order:", error);
    }
  }
};
const getters = {
  getCartItems: (state) => state.cartItems,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
