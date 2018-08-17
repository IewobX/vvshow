<template>
    <div class="sign_up">
      <div class="header">
        <h1>注册</h1>
      </div>
      <label>用&nbsp;&nbsp;户&nbsp;&nbsp;名: </label><input type="text" v-model="username" placeholder="请输入用户名"/><br />
      <label>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码: </label><input type="text" v-model="password" placeholder="请输入密码"/><br />
      <label>电子邮件: </label><input type="text" v-model="email" placeholder="请输入电子邮件"/><br />
      <label>电话号码: </label><input type="text" v-model="phone" placeholder="请输入电话号码"/><br />
      <label>验证问题: </label><input type="text" v-model="question" placeholder="请输入验证问题"/><br />
      <label>验证答案: </label><input type="text" v-model="answer" placeholder="请输入验证答案"/><br />
      <button @click="signUp">提交</button>
    </div>
</template>

<script>
import './SignUp.less'
export default {
  name: 'sign-up',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      phone: '',
      question: '',
      answer: ''
    }
  },
  methods: {
    signUp () {
      let user = {
        username: this.username,
        password: this.password,
        email: this.email,
        phone: this.phone,
        question: this.question,
        answer: this.answer
      }
      this.$http.post('/api/user', user)
        .then(response => {
          console.log(response)
        })
    }
  }

}
</script>

<style scoped>

</style>
