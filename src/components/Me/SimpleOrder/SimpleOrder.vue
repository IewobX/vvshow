<template>
  <div class="simple_order">
    <div class="header">查看订单</div>
    <!--{{this.orderMsg.orderItemVOList}}-->
    <div class="order_item">
      <div class="address_msg">
        <div class="">{{addressMsg.receiverName}}&nbsp;&nbsp;&nbsp;&nbsp;<span>{{addressMsg.receiverMobile}}</span></div>
        <div class="">{{addressMsg.receiverProvince}}{{addressMsg.receiverCity}}{{addressMsg.receiverDistrict}}{{addressMsg.receiverAddress}}</div>
      </div>
      <div class="item" v-for="item in this.orderItems">
        <div class="img">
          <img src="../../../assets/logo.png"/>
        </div>
        <div class="order_msg">
          <div>{{item.productName}}</div>
          <span>数量: {{item.quantity}}</span><span class="totalPrice">价格: {{item.totalPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './SimpleOrder.less'
  export default {
    name: "simple-order",
    data(){
      return {
        // orderMsg: {},
        orderItems: [],
        addressMsg: {}
      }
    },
    mounted(){
      console.log(this.$route.params);
      this.orderItems = this.$route.params.orderMsg.orderItemVOList
      this.addressMsg = this.$route.params.orderMsg.shippingVo
    }
  }
</script>

<style scoped>

</style>
