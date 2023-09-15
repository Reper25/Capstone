<template>
    <div>
   <nav class="navbar navbar-expand-lg sticky-bottom">
      <div class="container-fluid">
        <router-link to="/"><img src="https://i.postimg.cc/4yMCrmmK/Screenshot-2023-09-13-141248-removebg-preview.png" alt="LOGO" loading="lazy" class="logo"></router-link>
        <button class="navbar-toggler bg-light food" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item m-2">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item m-2">
              <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item m-2">
              <router-link to="/product">Products</router-link>
            </li>
            <li class="nav-item m-2">
              <router-link to="/contact">Contact</router-link>
            </li>
            <li class="nav-item m-2" v-if="user ? user.userRole === 'admin' : null">
                <router-link to="/admin">Admin</router-link>
            </li>
            <li class="nav-item m-2">
                <router-link to="/login">Login</router-link>
            </li>
            <li class="nav-item m-2">
                <router-link to="/register">Register</router-link>
            </li>
            <li class="nav-item m-2">
                <router-link to="/profile">Profile</router-link>
            </li>
            <li class="nav-item m-2">
                <router-link to="/cart"><b><i class="bi bi-cart"></i></b></router-link>
            </li>
           </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
import 'bootstrap-icons/font/bootstrap-icons.css';
const {cookies} = useCookies();
export default {
  computed: {
    user() {
      return this.$store.state.user ||
      cookies.get('user')
    },
    result() {
      return this.user?.result
    },
    isAdmin() {
      return this.result?.userRole?.toLowerCase() === "admin"
    }
  }
};
</script>

<style scoped>
.navbar{
  z-index: 2;
background: #FFDBC3 !important;
}
nav ul li a {
  color: black; /* Change this to the desired color */
}
nav ul li a:hover {
  color: #5C4B99; /* Color on hover */
}
.food{
  color: black;
}
.food:hover {
  color: #5C4B99;
}
.logo{
  width: 9rem;
}

</style>