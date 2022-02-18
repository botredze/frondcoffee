<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand"> Home </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ma-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link"> login</router-link>
          </li>

          <li class="nav-item">
            <router-link to = "/register" class="nav-link">Sing up</router-link>
          </li>

        </ul>

        <ul class="navbar-nav ml-auto">
          <a href="javascript:void(0)" @click="logout" class="nav-link"> Logout</a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",

  methods: {
    logout() {

    }
  }
}
</script>

<style scoped>

</style>