<template>
  <div class="produsts_list">
    <div class="content">
      <div @click="getSingleItem(item)" class="produsts_item" v-for="item in list">
        <img src="">
        {{item.name}}
      </div>
    </div>
    <single-item :item-msg="this.itemMsg" @cancelBuy="cancelBuy" v-if="showSingleItem"></single-item>
  </div>
</template>

<script>
  import './ProdustsList.less'
  import SingleItem from '../SingleItem/SingleItem'
  export default {
    name: "produsts-list",
    data(){
      return{
        list: {},
        itemMsg:{},
        showSingleItem: false
      }
    },
    mounted() {
      this.$http.get('/api/products/?keyword=' + this.keyword + '&categoryId=' + this.id)
        .then(response => {
          this.list= response.body.data.list;
        })
    },
    methods: {
      getSingleItem(item){
        this.itemMsg = item
        this.showSingleItem = true
      },
      cancelBuy(){
        this.showSingleItem = false
      }
    },
    props: [
      'keyword',
      'id'
    ],
    components:{
      SingleItem
    }
  }
</script>

<style scoped>

</style>
