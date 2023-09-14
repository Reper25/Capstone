<template>
  <div class="container">
    <div class="col" v-if="user">
      <h1>Welcome Back To Your Profile</h1>
      <img
        :src="user.userProfile"
        class="card-img-top img-fluid"
        :alt="user.firstName"
      />
      <div class="body">
        <br />
        <span>User First Name:</span> {{ user.firstName }}
        <br />
        <span>User Last Name:</span> {{ user.lastName }}
        <br />
        <span>User Age:</span> {{ user.userAge }}
        <br />
        <span>User Gender:</span> {{ user.gender }}
        <br />
        <span>User Role:</span> {{ user.userRole }}
        <br />
        <span>User Email:</span> {{ user.emailAdd }}
        <br />
        <br />
      </div>
    </div>
    <updateUsercomp :user="user"/>
    <button class="btn" @click.prevent="LogOut">Logout</button>
    <button class="btn" @click="deleteUser(user.userID)">delete</button>
  </div>
</template>

<script>
import router from "@/router";
import updateUsercomp from '@/components/updateUsercomp'    
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  components:{
    updateUsercomp
  },

  methods: {
    LogOut() {
      cookies.remove("LegitUser");
      try {
        const data = JSON.parse(localStorage.getItem("user"));

        if (data) {
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Error fetching data from local storage:", error);
      }
      router.push({ name: "login" });
    },
    async deleteUser(userID) {
      if (confirm("Are you sure you want to delete this User?")) {
        let data = await this.$store.dispatch("deleteUser", userID);
        if (!data) {
          alert(data);
        } else {
          setTimeout(() => {
            location.reload();
          }, 500);
        }
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchUser");
  },
  created() {
      const storedPerson = localStorage.getItem("user");
      console.log(storedPerson);
    if (storedPerson) {
      this.user = JSON.parse(storedPerson);
    }

    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.$store.commit("setUser", data);
    }
  },
};
</script>

<style scoped>
.card-img-top {
  width: 15%;
}
.container {
  height: 65vh;
}
</style>
