<template>
  <div class="me">
    <Personal v-if="login" :userId="this.userId"></Personal>
    <Login @login_success="loginSuccess" v-else></Login>
  </div>
</template>

<script>
import Login from './Me/login/Login'
import Personal from './Me/personal/Personal'
export default {
  name: 'me',
  data () {
    return {
      login: false,
      userId: ''
    }
  },
  mounted () {
    if(document.cookie.split(";")[0].split('=')[1]){
      this.login = true;
      this.userId = document.cookie.split(";")[0].split('=')[1];
    }
  },
  methods: {
    loginSuccess (data) {
      this.login = true
      this.userId = data.userId
    }
  },
  components: {
    Login,
    Personal
  }
}
</script>

<style scoped>

</style>
