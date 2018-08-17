<template xmlns:>
    <div class="forget_pwd">
      <div class="header">
        <h1>忘记密码</h1>
      </div>
      <p>问&nbsp;&nbsp;&nbsp;&nbsp;题: <span v-text="question"></span></p>
      <label>答&nbsp;&nbsp;&nbsp;&nbsp;案:</label><input type="text" v-model="answer" @change="getToken"/><br />
      <label>新密码:</label><input type="password" v-model="newPwd" />
      <button @click="updata">确认</button>
    </div>
</template>

<script>
import './forgetPwd.less'
export default {
  name: 'forget-pwd',
  data () {
    return {
      question: '',
      answer: '',
      newPwd: '',
      token: ''
    }
  },
  mounted () {
    this.question = this.$route.params.question + '?'
  },
  methods: {
    getToken () {
      this.$http.post('/api/password/forget-password/answer', {username: this.$route.params.username, question: this.$route.params.question, answer: this.answer})
        .then(response => {
          // console.log(response.body.data);
          if (response.body.success) {
            this.token = response.body.data
          } else {
            alert('答案错误!')
          }
        })
    },
    updata () {
      this.$http.put('/api/password/forget-password', {username: this.$route.params.username, newPassword: this.newPwd, token: this.token})
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>

</style>
