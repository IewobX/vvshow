<template>
  <div class="products">
    <div class="header">商品列表</div>
    <produsts-list :keyword="this.listArgs.keyword" :id="this.listArgs.id"></produsts-list>
  </div>
</template>

<script>
  import ProdustsList from './ProductsList/ProdustsList'
  export default {
    name: "products",
    data(){
      return{
        listArgs:{}
      }
    },
    created(){
      this.listArgs = this.$route.params
    },
    components: {
      ProdustsList
    }
  }
</script>

<style scoped>
  .header{
    margin-bottom: 0;
  }
</style>
