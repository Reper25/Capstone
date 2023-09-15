<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="button"
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
button {
  --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;
}

.button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

.button:hover {
  color: white;
}

.button:before {
  top: 100%;
  left: 100%;
  transition: .3s all;
}

.button:hover::before {
  top: -30px;
  left: -30px;
}
</style>