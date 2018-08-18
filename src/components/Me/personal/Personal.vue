<template>
  <div class="personal">
    <div class="header">个人中心</div>
    <div class="top">
      <div class="profile">
        <img src="" alt="" />
        <span>{{user.username}}</span>
      </div>
    </div>
    <ul class="message_item">
      <li>我的帐号</li>
      <li>我的收货地址</li>
      <li>我的收藏</li>
    </ul>
  </div>
</template>

<script>
  import './Personal.less'
  export default {
    name: 'personal',
    data () {
      return {
        user: {}
      }
    },
    mounted () {
      this.$http.get('/api/user/' + this.userId)
        .then(response => {
          console.log(response.body)
          if (response.body.success) {
            this.user = response.body.data
          }
        })
    },
    props: ['userId']
  }
</script>

<style scoped>

</style>
