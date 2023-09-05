import { createStore } from 'vuex'
import axios from "axios";
const miniURL = "https://capstone-nydl.onrender.com/";

export default createStore({  
    state: {
    users: null,
    user: null,
    Products: null,
    product: null,
    spinner: null,
    token: null,
    selectedProduct: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
      
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, spinner) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${miniURL}Users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${miniURL}user`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async createUser(context) {
      try{
        const { data } = await axios.post(`${miniURL}user`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateUser(context, userID) {
      try{
        const { data } = await axios.patch(`${miniURL}user`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteUser(context, userID, payload) {
      try{
        const { data } = await axios.delete(`${miniURL}user/${userID}`, payload);
        if(data.msg === "User record deleted successfully") {
          return true
        }
        else {
          return false
        }
        // context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${miniURL}Products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
  async updateProduct(context, payload) {
    console.log(payload)
    try {
      const res = await axios.patch(`${miniURL}product/${payload.prodID}`, payload);
      const { msg, err } = await res.data;
      console.log(msg, err);
      if (err) {
        console.log("An error has occured: ", err);
        context.commit("setMsg", err);
      }
      if (msg) {
        context.dispatch("fetchProducts")
        context.commit("setProduct", msg);
        context.commit("setMsg", "Successfully updated product.");
      }
    } catch (e) {
      context.commit("setMsg", e);
    }
  },
  async addProduct(context, payload) {
    console.log("REACHED");
      try {
        const { res } = await axios.post(`${miniURL}product`, payload);
        const { results, err } = await res.data;
        if (results) {
          context.commit("setProduct", results[0]);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", msg);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteProduct(context, prodID) {
      console.log("reached");
      try {
        const { res } = await axios.delete(`${miniURL}product/${prodID}`);
        const { msg, err } = await res.data;
        if (err) {
          alert("an error has occured, please try again");
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", "An error occured");
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
  },
});