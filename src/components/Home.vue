<template>
  <form @submit.prevent>
    <div>
      <h3 v-if="user"> Helli, {{user.username}}</h3>
      <h3 v-if="!user">You are not logger in ! </h3>
    </div>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: "",
      users: [],
    };
  },


  methods: {
    getProfile() {


    }
  }

}
</script>
<style>

</style>
