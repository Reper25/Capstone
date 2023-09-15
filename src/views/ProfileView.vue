<template>
  <div class="container">
    <div class="col" v-if="user">
      <h1>Welcome Back To Your Profile</h1>
      <div class="body">
        <div class="col-lg-12">
      <img
        :src="user.userProfile"
        class="card-img-top img-fluid"
        :alt="user.firstName"
      />
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.firstName }} {{ user.lastName }}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Age</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.userAge }}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Gender</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.gender }}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">User Role</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.userRole }}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.emailAdd }}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
    <updateUsercomp :user="user"/> <br>
    <button class="button" @click.prevent="LogOut">Logout</button>
    <button class="button" @click="deleteUser(user.userID)">delete</button>
  </div>
  <br>
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
  width: 20%;
}

button {
 background-color: #eee;
 border: none;
 padding: 1rem;
 font-size: 1rem;
 width: 10em;
 border-radius: 1rem;
 color: lightcoral;
 box-shadow: 0 0.4rem #dfd9d9;
 cursor: pointer;
}

button:active {
 color: white;
 box-shadow: 0 0.2rem #dfd9d9;
 transform: translateY(0.2rem);
}

button:hover:not(:disabled) {
 background: lightcoral;
 color: white;
 text-shadow: 0 0.1rem #bcb4b4;
}

button:disabled {
 cursor: auto;
 color: grey;
}
</style>
