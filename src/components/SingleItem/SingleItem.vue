<template>
  <div @click.self="turnBack" class="single_item">
    <div class="content">
      {{this.itemMsg}}
      <div @click.self="addToCart">加入购物车</div>
    </div>
  </div>
</template>

<script>
  import './SingleItem.less'
  export default {
    name: "single-item",
    methods: {
      turnBack(){
        this.$emit('cancelBuy');
      },
      addToCart(){
        alert(1)
      }
    },
    props: ['itemMsg']
  }
</script>

<style scoped>

</style>
