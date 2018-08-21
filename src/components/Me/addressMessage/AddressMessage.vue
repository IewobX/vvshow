<template>
  <div class="address_message">
    <div class="header">我的收货地址</div>
    <div class="main">
      <div class="address_item" v-for="item in address">
        <p>
          <span class="Rname">{{item.receiverName}}</span>
          <span>{{item.receiverMobile}}</span>
          <a @click="turnToMod(item)" class="modify_address">修改</a>
        </p>
        <p>
          <span>{{item.receiverProvince}}</span>
          <span>{{item.receiverCity}}</span>
          <span>{{item.receiverDistrict}}</span>
          <span>{{item.receiverAddress}}</span>
        </p>
      </div>
      <div class="add_">
        <button class="btn_" @click="turnToAdd">新增</button>
      </div>
    </div>
  </div>
</template>

<script>
  import './AddressMessage.less'
export default {
  name: "address-message",
  data (){
    return {
      address: ''
    }
  },
  mounted() {
    this.$http.get('/api/shipping/' + localStorage.userId)
      .then(response => {
        this.address = response.body.data.list
      })
  },
  methods: {
    turnToAdd() {
      this.$router.push({
        name: 'OperateAddress',
      })
    },
    turnToMod(item) {
      this.$router.push({
        name: 'OperateAddress',
        params: item
      })
    }
  }
}
</script>

<style scoped>

</style>
