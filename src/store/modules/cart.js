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
  async confirmOrder(context) {
    try {
      const orderItems = {
        book_id: context.state.cartItems.map(item => item.book.id),
        quantity: context.state.cartItems.map(item => item.quantity)
      }

      console.log("Order Items:", orderItems);
  
      // Get the user's token from local storage
      const token = JSON.parse(localStorage.getItem('user-info')).token;
  
      // Set the headers with the authorization token
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      // Send a POST request to the API with the headers
      await axios.post("http://10.0.10.220:8080/api/confirm", orderItems, { headers });

    } catch (error) {
      // Handle any errors here
      console.error("Error confirming order:", error);
    }
  },
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
