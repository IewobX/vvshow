<template>
  <div class="produsts_list">
    <div class="produsts_item" v-for="item in list">
      <img src="">
      {{item.name}}
    </div>
  </div>
</template>

<script>
  import './ProdustsList.less'
  export default {
    name: "produsts-list",
    data(){
      return{
        list: {}
      }
    },
    mounted() {
      console.log(this.keyword,this.id);
      this.$http.get('/api/products/?keyword=' + this.keyword + '&categoryId=' + this.id)
        .then(response => {
          this.list= response.body.data.list;
        })
    },
    props: [
      'keyword',
      'id'
    ]
  }
</script>

<style scoped>

</style>
