<template>
  <form @submit.prevent="registerUser">
    <div class="form-group">
      <label> Пользователь</label>
      <input v-model="login" type="text"  class="form-control" placeholder="Имя пользователя"/>
    </div>

    <div class="form-group">
      <label> Фамилия </label>
      <input v-model="first_name" type="text"  class="form-control" placeholder="Введите вашу фамилию"/>
    </div>

    <div class="form-group">
      <label> Имя</label>
      <input v-model="last_name" type="text"  class="form-control" placeholder="Введите ваше имя"/>
    </div>

    <div class="form-group">
      <label> Password</label>
      <input name="password" v-model="password" type="password" class="form-control" placeholder="Введите пароль">
    </div>


    <div class="form-group">
      <label> Email</label>
      <input v-model="email" type="email" class="form-control" placeholder="Введите Email">

      <button class="btn btn-primary btn-block"> Login </button>

    </div>
  </form>
</template>

<script>

import axios from "axios";

export default {
  name: "Register",

  data() {
    return {
      login: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
    }
  },

  methods: {
    registerUser(){
      const newUser = {
        login: this.login,
        password: this.password,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email
      }

       axios.post('http://localhost:3000/register', newUser)
      .then(response => {
        console.log(response)
      }).catch(err => {
         console.log(err.response)
       })
    }
  }

}
</script>

<style scoped>

</style>