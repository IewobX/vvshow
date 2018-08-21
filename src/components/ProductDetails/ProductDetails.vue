<template>
  <div class="product_details">
    <div @click="turnToProducts(item)" class="item" v-for="item in products">
      {{item.name}}
    </div>
  </div>
</template>

<script>
  import './ProductDetails.less'
  export default {
    name: 'product-details',
    data() {
      return {
        products: []
      }
    },
    mounted(){
      this.$parent.getCategory(this.$route.params.category).then(value => {
        this.products = value
      })
    },
    methods: {
      turnToProducts(item) {
        this.$router.push({
          name: 'Products',
          params: {
            keyword: item.name,
            id: item.id
          }
        })
      }
    },
    watch: {
      '$route'(){
        this.$parent.getCategory(this.$route.params.category).then(value => {
          // console.log(value);
          this.products = value
        })
      }

    }
  }
</script>

<style scoped>

</style>
