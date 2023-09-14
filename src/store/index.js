import { createStore } from 'vuex'
import axios from "axios";
const miniURL = "https://capstone-nydl.onrender.com/";
import sweet from 'sweetalert'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import authenticateUser from '@/services/authenticateUser';
const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

export default createStore({  
    state: {
    users: null,
    user: null,
    updates: null ,
    Products: null,
    product: null,
    spinner: null,
    token: null,
    selectedProduct: null,
    msg: null,
    cart: [],
    cart: storedCart,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setUpdates(state, updates) {
      state.updates = updates
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
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productIndex) {
      state.cart.splice(productIndex, 1);
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
    async updateDetails(context, payload){
      try{
        const res = await axios.patch(`${miniURL}user/${context.state.user.userID}`, payload)
        console.log("Response: ", res)
        console.log("Payload: :", payload)
        const { msg, err } = res.data
        if(err){
          context.commit("setMsg", err)
        }
        if(msg){
          context.dispatch("fetchUsers")
          context.commit("setUser", payload)
          localStorage.setItem("user", JSON.stringify(payload))
          context.dispatch("fetchUser")
          context.commit("setUpdates", msg)
        }
      } catch(e){

      }
    },
    async updateUser(context, payload) {
      try {
        const res = await axios.put(`${miniURL}user/${payload.userID}`, payload)
        console.log('response:', res);
        let { msg ,err } = await res.data;

        console.log(context.state.user.userID)
        if(payload.userID === context.state.user.userID){
          localStorage.setItem("user", JSON.stringify(payload))
          context.commit("setUser", payload)
        }
        if(msg === "User profile updated successfully."){
          context.dispatch("fetchUsers")
          localStorage.setItem("user", JSON.stringify(payload))
        }
        if(err){
          context.commit("setMsg", err)
        }
      } catch (e) {
        context.commit("setMsg", "an error occurred");
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
    async regUser(context, payload) {
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
    //add user
    async addUser(context, payload) {
      try {
        const { msg } = (await axios.post(`${miniURL}register`, payload)).data;
        if (msg) {
          sweet({
            title: "User Added Succesfully",
            text: msg,
            icon: "success",
            timer: 4000,
          });
          context.dispatch("fetchUsers");
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
          localStorage.setItem("user", JSON.stringify(cResult))
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
    // Action to add a product to the cart
  async addToCartAction(context, product) {
    context.commit('addToCart', product);
    localStorage.setItem('cart', JSON.stringify(context.state.cart));
  },
  // Action to remove a product from the cart by index
  async removeFromCartAction(context, productIndex) {
    context.commit('removeFromCart', productIndex);
  },
  },
});