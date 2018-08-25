<template>
  <div class="orders">
    <div class="header">我的订单</div>
    <div class="orders_list">
      <div class="list_item" v-for="item in ordersList">
        <span>收货人: {{item.receiverName}}</span>
        <div class="good_item" v-for="good in item.orderItemVOList">
          {{good.productName}}
        </div>
        <span v-if="item.status === 10">去支付</span>
      </div>

    </div>
  </div>
</template>

<script>
  import './Orders.less'
  export default {
    name: "orders",
    data(){
      return{
        ordersList: []
      }
    },
    mounted(){
      this.getAllOrders()
    },
    methods: {
      getAllOrders(){
        this.$http.get('/api/orders/' + localStorage.userId)
          .then(response => {
            this.ordersList = response.body.data.list
            console.log(this.ordersList);
          })
      }
    }
  }
</script>

<style scoped>

</style>
