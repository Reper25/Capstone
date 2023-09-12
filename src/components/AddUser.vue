<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn text-black"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add User
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New User</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                placeholder="Name"
                type="text"
                v-model="model.user.firstName"
                required
              />
              <input
                placeholder="Surname"
                type="text"
                v-model="model.user.lastName"
                required
              />
              <input
                placeholder="Age"
                type="number"
                v-model="model.user.userAge"
                required
              />
              <input
                placeholder="Gender"
                type="text"
                v-model="model.user.gender"
                required
              />
              <input
                placeholder="Role"
                type="text"
                v-model="model.user.userRole"
                required
              />
              <input
                placeholder="email"
                type="text"
                v-model="model.user.emailAdd"
                required
              />
              <input
                placeholder="Password"
                type="text"
                v-model="model.user.userPass"
                required
              />
              <input
                placeholder="Image URL"
                type="text"
                v-model="model.user.userProfile"
                required
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn" @click="addUser">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        model: {
            user: {
                    firstName: "",
                    lastName: "",
                    userAge: null,
                    gender: "",
                    userRole: "",
                    emailAdd:"",
                    userPass: "",
                    userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png"
                    
                }
        },
      };
    },
    methods: {
            addUser(){
                console.log("reached");
                this.$store.dispatch('addUser', this.model.user);
            }
        }
  }

</script>

<style scoped>

</style>