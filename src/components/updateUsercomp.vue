<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="button"
        @click="openEditModal(user.userID)"
        data-bs-toggle="modal"
        :data-bs-target="'#rexampleModal' + user.userID"
      >
        edit
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        :id="'rexampleModal' + user.userID"
        tabindex="-1"
        :aria-labelledby="'rexampleModalLabel' + user.userID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="rexampleModalLabel3">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label>first name:</label>
              <input
                type="text"
                placeholder="first name"
                v-model="editingUser.firstName"
              />
              <label>last name:</label>
              <input
                type="text"
                placeholder="last name"
                v-model="editingUser.lastName"
              />
              <label>Age:</label>
              <input
                type="number"
                placeholder="age"
                v-model="editingUser.userAge"
              />
              <label>gender:</label>
              <input
                type="text"
                placeholder="gender"
                v-model="editingUser.gender"
              />
              <!-- <label>user role:</label>
              <input
                type="text"
                placeholder="role"
                v-model="editingUser.userRole"
              /> -->
              <label>email address:</label>
              <input
                type="text"
                placeholder="email address"
                v-model="editingUser.emailAdd"
              />
              <label>user profile:</label>
              <input
                type="text"
                placeholder="profile image"
                v-model="editingUser.userProfile"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn"
                @click="updateProduct(user.userID)"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["user"],
    data() {
      return {
        editingUser: {
          ...this.user,
        },
        editingUserID: null,
      };
    },
    methods: {
      openEditModal(userID) {
        console.log("reached");
        this.editingUserID = userID;
      },
      updateProduct(userID) {
        this.$store
          .dispatch("updateDetails", {
             ...this.editingUser,
          })
          .then(() => {
              console.log("user successfully updated");
              // setTimeout(() => {
              //   location.reload();
              // }, 500);
            })
          .catch((err) => {
            console.error("Error updating: ", err);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .btn{
    margin-bottom: 7px;
    background-color: transparent;
    color: black;
  }
  
  
  input{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;
  }

  .button {
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

.button:active {
 color: white;
 box-shadow: 0 0.2rem #dfd9d9;
 transform: translateY(0.2rem);
}

.button:hover:not(:disabled) {
 background: lightcoral;
 color: white;
 text-shadow: 0 0.1rem #bcb4b4;
}

.button:disabled {
 cursor: auto;
 color: grey;
}
  </style>