<template>
  <div class="order">
    <div class="header">创建订单</div>
    <div class="shipping">
      <div class="address_item" @click="chooseAddress">
        <p>
          <span class="Rname">{{address.receiverName}}</span>
          <span>{{address.receiverMobile}}</span>
        </p>
        <p>
          <span>{{address.receiverProvince}}</span>
          <span>{{address.receiverCity}}</span>
          <span>{{address.receiverDistrict}}</span>
          <span>{{address.receiverAddress}}</span>
        </p>
        <span class="gt">&gt;</span>
      </div>
      <div class="goods">
        <div class="item" v-for="item in items">
          <div class="img">
            <img src="../../../assets/logo.png"/>
          </div>
          <div class="details">
            <p>{{item.productName}}</p>
            <p>数量: {{item.quantity}}  <span class="price">总价: {{item.productTotalPrice}}</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="total">
      <span class="totalPrice">总价: {{totalPrice}}</span>
      <span class="pay" @click="createOrder">创建订单</span>
    </div>
  </div>
</template>

<script>
  import './CreateOrder.less'
  export default {
    name: "order",
    data() {
      return {
        address: {},
        items: []
      }
    },
    mounted(){
      this.items = JSON.parse(localStorage.order)
      if(this.$route.params.shipping){
        this.address = this.$route.params.shipping
      }
      else {
        this.$http.get('/api/shipping/' + localStorage.userId)
          .then(response => {
            this.address = response.body.data.list[0]
          })
      }

    },
    computed: {
      totalPrice: function () {
        let result = 0
        this.items.forEach(item => {
          result += item.productTotalPrice
        })
        return result
      }
    },
    methods: {
      chooseAddress(){
        this.$router.push({
          name: 'AddressMessage',
          params: {
            choose: true
          }
        })
      },
      getProductIds(){
        let result = []
        this.items.forEach(item => {
          result.push(item.productId)
        })
        return result.join(',')
      },
      createOrder(){
        this.$http.post('/api/orders/' + this.address.id + '/' + localStorage.userId + '?productIds=' + this.getProductIds())
          .then(response => {
            console.log(response)
            if(response.body.success){
              this.turnToPay(response.body.data)
            }
            else{
              alert('该订单已创建')
            }

          })
      },
      turnToPay(orderMsg){
        this.$router.push({
          name: 'Pay',
          params: {
            orderMsg: orderMsg
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
