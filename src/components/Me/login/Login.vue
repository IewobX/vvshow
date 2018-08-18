<template>
  <div class="login">
    <div class="header">
      <h1>登录</h1>
    </div>
    <label>用户名: </label><input type="text" v-model="username" placeholder="请输入您的用户名"/><br />
    <label>密&nbsp;&nbsp;&nbsp;码: </label><input type="password" v-model="password" placeholder="请输入您的密码"/><br />
    <router-link :to="{name: 'SignUp'}" tag="a">新用户?点击注册</router-link><a @click="forgetPwd" class="edit_pwd">忘记密码?</a>
    <button @click="login">登录</button>
    <button @click="deleteUser">注销</button>
  </div>
</template>

<script>
  import './Login.less'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
        question: ''
      }
    },
    methods: {
      login () {
        if (this.username === '') {
          alert('用户名不能为空')
          return
        }
        if (this.password === '') {
          alert('请输入密码')
          return
        }
        this.$http.post('/api/session', {username: this.username, password: this.password})
          .then(response => {
            console.log(response)
            if (response.body.success) {
              if(!response.body.data){
                alert(response.body.msg)
                return
              }
              localStorage.userId = response.body.data.split('-')[0]
              this.$emit('login_success', {'userId': response.body.data.split('-')[0]})

            } else {
              alert(response.body.msg)
            }
          })
      },
      deleteUser () {
        this.$http.delete('/api/session')
          .then(response => {
            if (response.body.success) {
              alert('注销成功')
            }
          })
      },
      forgetPwd () {
        this.$http.get('/api/password/forget-password/question?username=' + this.username)
          .then(
            response => {
              console.log(response)
              if (response.body.success) {
                this.$router.push({
                  name: 'forgetPwd',
                  params: {
                    username: this.username,
                    question: response.body.data
                  }
                })
              } else {
                alert('用户名不存在!')
              }
            }
          )
      }
    }
  }
</script>

<style scoped>

</style>
