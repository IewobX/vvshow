<template>
  <div class="product_details">
    <div v-for="item in products">
      {{item.name}}
    </div>
  </div>
</template>

<script>
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
    watch: {
      '$route'(){
        this.$parent.getCategory(this.$route.params.category).then(value => {
          this.products = value
        })
      }

    }
  }
</script>

<style scoped>

</style>
