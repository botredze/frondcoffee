<template>
  <form @submit.prevent="loginUser">

    <div class="form-group">
      <label> Username</label>
      <input type="text"  v-model="login" class="form-control" placeholder="Имя пользователя"/>
    </div>

    <div class="form-group">
      <label> Password</label>
      <input type="password" v-model= "password" class="form-control" placeholder="Введите пароль">
    </div>

    <button type="submit" class="btn btn-primary btn-block"> Login </button>
  </form>
</template>

<script>

import axios from "axios";

export default {
  name: "Login.vue",

  data() {
    return {
      login: '',
      password: ''
    }
  },

  methods: {
    loginUser (){
      const credentails = {
        login: this.login,
        password: this.password
      }

      axios
      .post("http://localhost:3000/login", credentails)
      .then(response => {
        console.log( response)})
      .catch(err=> {
        console.log(err.response)})
    }


  }


}
</script>

<style scoped>

</style>