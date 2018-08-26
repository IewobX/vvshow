<template>
  <div class="pay">
    支付
    请在30分钟内完成支付
    <div>{{price}}</div>
  </div>
</template>

<script>
  export default {
    name: "pay",
    data () {
      return{
        price: ''
      }
    },
    mounted(){
      console.log(this.$route.params);
      this.price = this.$route.params.orderMsg.payment
    }
  }
</script>

<style scoped>

</style>
