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
      this.price = this.$route.params.price
    }
  }
</script>

<style scoped>

</style>
