<template>
    <div class="gtr">
        <form class="form" @submit.prevent = "register">
            <div class="container">
              <h1 class="title">Register to open an Account.</h1>
            </div>
            <br>
            <div class="input1">
                <label class="input_label" for="firstName_field"><i class="bi bi-person-circle"></i></label>
                <input v-model="payload.firstName" placeholder="First Name" title="First Name" name="name" type="text" class="input_field" id="firstName_field" required  oninvalid="this.setCustomValidity('Please Enter Your First Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <br>
              <div class="input1">
                <label class="input_label" for="Surname_field"><i class="bi bi-person-circle"></i></label>
                <input v-model="payload.lastName" placeholder="Last Name" title="Surname" name="name" type="text" class="input_field" id="Surname_field" required  oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <br>
              <div class="input1">
                <label class="input_label" for="Age_field"><i class="bi bi-person-circle"></i></label>
                <input v-model="payload.userAge" placeholder="Age" title="Age" name="name" type="text" class="input_field" id="Age_field" required  oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <br>
              <div class="input1">
                <label class="input_label" for="Gender_field"><i class="bi bi-gender-female"></i><i class="bi bi-gender-male"></i></label>
                <input v-model="payload.gender" placeholder="Gender" title="Gender" name="name" type="text" class="input_field" id="Gender_field" required  oninvalid="this.setCustomValidity('Please Enter Your Gender')"
                oninput="this.setCustomValidity('')">
              </div>
              <br>
              <div class="input1">
                <label class="input_label" for="Image_field"><i class="bi bi-camera-video"></i></label>
                <input v-model="payload.userProfile" placeholder="URL" name="name" type="text" class="input_field" id="Image_field">
              </div>
              <br>
            <div class="input1">
              <label class="input_label" for="Email_field"><i class="bi bi-envelope-at-fill"></i></label>
              <input v-model="payload.emailAdd" placeholder="name@gmail.com" title="email" name="name" type="email" class="input_field" id="Email_field" required  oninvalid="this.setCustomValidity('Please Enter Your Email')"
              oninput="this.setCustomValidity('')">
            </div>
            <br>
            <div class="input1">
              <label class="input_label" for="Password_field"><i class="bi bi-lock-fill"></i></label>
              <input v-model="payload.userPass" placeholder="Password" title="password" name="name" type="password" minlength="4" maxlength="10" class="input_field" id="Password_field" required  oninvalid="this.setCustomValidity('Please Enter Your Password')"
              oninput="this.setCustomValidity('')">
            </div>
            <br>
            <button type="submit" class="button">
              <span>Sign Up</span>
            </button>
          </form>
    </div>
    <br>
</template>

<script>
    export default {
        data(){
            return{
                payload: {
                    firstName: "",
                    lastName: "",
                    userAge: null,
                    gender: "",
                    emailAdd:"",
                    userPass: "",
                    userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png"
                    
                }
            }
        },
        methods: {
            register (){
                this.$store.dispatch('regUser', this.payload)
            }
        }
    }
</script>

<style scoped>


input {
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 1em;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: 300ms ease-in-out;
}

input:focus {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 13px 13px 100px #969696,
             -13px -13px 100px #ffffff;
}
.button {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #7d2ae8;
  transition: all 0.2s ease;
}

.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>