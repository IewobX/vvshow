<template>
  <div class="cart">
    <div class="header">购物车</div>
    <good-items></good-items>
  </div>
</template>

<script>
import GoodItems from './Cart/goodItems/GoodItems'
export default {
  name: 'cart',
  components: {
    GoodItems
  }
}
</script>

<style scoped>
  .header{
    margin-bottom: 0;
    font-size: 24px;
  }
</style>
