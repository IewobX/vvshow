<template>
  <div class="me">
    <Personal v-if="login" :userId="this.userId" @sign_out="signOut"></Personal>
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
      this.userId = localStorage.userId;
    }
  },
  methods: {
    loginSuccess (data) {
      this.login = true
      this.userId = data.userId
    },
    signOut(){
      this.login = false
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
