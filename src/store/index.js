import { createStore } from 'vuex'
import axios from "axios";
const miniURL = "https://capstone-nydl.onrender.com/";
import sweet from 'sweetalert'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import authenticateUser from '@/services/authenticateUser';

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
    //register 
    async addUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${miniURL}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000
          });
        }
      } catch (e) {
        context.commit(console.log(e))
      }
    },
    //login
    async login(context, payload) {
      try {
        const { msg, token, cResult } = (
          await axios.post(`${miniURL}login`, payload)
        ).data;
        console.log( msg, token, cResult);
        if (cResult) {
          context.commit("setUser", { cResult, msg });
          cookies.set("LegitUser", { msg, token, cResult });
          authenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: "Welcome back",
            icon: "success",
            timer: 4000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 4000,
          });
        }
      } catch (e) {
        context.commit(console.log((e)));
      }
    },
  },
});