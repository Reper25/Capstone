<template>
    <div class="gtr">
        <form class="form" @submit.prevent = "register">
            <div class="container">
              <p class="title">Register to open an Account.</p>
              <span class="subtitle">Get started with our website, just create an account and enjoy the experience.</span>
            </div>
            <br>
            <div class="input">
                <label class="input_label" for="firstName_field"><i class="bi bi-person-circle"></i> First Name</label>
                <input v-model="payload.firstName" placeholder="First Name" title="First Name" name="name" type="text" class="input_field" id="firstName_field" required  oninvalid="this.setCustomValidity('Please Enter Your First Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="input">
                <label class="input_label" for="Surname_field"><i class="bi bi-person-circle"></i> Last Name</label>
                <input v-model="payload.lastName" placeholder="Last Name" title="Surname" name="name" type="text" class="input_field" id="Surname_field" required  oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="input">
                <label class="input_label" for="Age_field"><i class="bi bi-person-circle"></i>Age</label>
                <input v-model="payload.userAge" placeholder="Age" title="Age" name="name" type="text" class="input_field" id="Age_field" required  oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="input">
                <label class="input_label" for="Gender_field"><i class="bi bi-gender-female"></i><i class="bi bi-gender-male"></i> Gender</label>
                <input v-model="payload.gender" placeholder="Gender" title="Gender" name="name" type="text" class="input_field" id="Gender_field" required  oninvalid="this.setCustomValidity('Please Enter Your Gender')"
                oninput="this.setCustomValidity('')">
              </div>
              <div class="input">
                <label class="input_label" for="Image_field"><i class="bi bi-camera-video"></i> Image</label>
                <input v-model="payload.userProfile" placeholder="URL" name="name" type="text" class="input_field" id="Image_field">
              </div>
            <div class="input">
              <label class="input_label" for="Email_field"><i class="bi bi-envelope-at-fill"></i> Email</label>
              <input v-model="payload.emailAdd" placeholder="name@gmail.com" title="email" name="name" type="email" class="input_field" id="Email_field" required  oninvalid="this.setCustomValidity('Please Enter Your Email')"
              oninput="this.setCustomValidity('')">
            </div>
            <div class="input">
              <label class="input_label" for="Password_field"><i class="bi bi-lock-fill"></i> Password</label>
              <input v-model="payload.userPass" placeholder="Password" title="password" name="name" type="password" minlength="4" maxlength="10" class="input_field" id="Password_field" required  oninvalid="this.setCustomValidity('Please Enter Your Password')"
              oninput="this.setCustomValidity('')">
            </div>
            <button type="submit" class="sign-up_btn">
              <span>Sign Up</span>
            </button>
          </form>
    </div>
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
.gtr{
  height: 70vh;
}
</style>