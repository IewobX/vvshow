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
      <li @click="getAddress">我的收货地址</li>
      <li @click="getOrder">我的订单</li>
      <li>我的收藏</li>
    </ul>
    <button class="btn_" @click="SignOut">注销</button>
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
          if (response.body.success) {
            this.user = response.body.data
          }
        })
        .catch(response => {
          if(response.status===401){
            this.$emit('sign_out')
          }
        })
    },
    methods: {
      getAddress(){
        this.$router.push({
          name: 'AddressMessage',
          params: {
            userId: this.userId
          }
        })
      },
      getOrder(){
        this.$router.push({
          name: 'Orders',
        })
      },
      SignOut () {
        this.$http.delete('/api/session')
          .then(response => {
            if (response.body.success) {
              localStorage.removeItem('userId')
              alert('注销成功')
              this.$emit('sign_out')
            }
          })
      },

    },
    props: ['userId']
  }
</script>

<style scoped>

</style>
