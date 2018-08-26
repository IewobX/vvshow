<template>
  <div class="orders">
    <div class="header">我的订单</div>
    <div class="orders_list">
      <div @click="turnToSimpleOrder(item)" class="list_item" v-for="(item,index) in ordersList">
        <span>收货人: {{item.receiverName}}</span><span v-if="item.status === 10" @click.stop="confirmDelOrder(item)" class="del">取消订单</span>
        <div class="good_item" v-for="good in item.orderItemVOList">
          {{good.productName}}
        </div>
        <span>{{item.statusDesc}}</span>
      </div>

    </div>
  </div>
</template>

<script>
  import './Orders.less'
  export default {
    name: "orders",
    data(){
      return{
        ordersList: []
      }
    },
    mounted(){
      this.getAllOrders()
    },
    methods: {
      getAllOrders(){
        this.$http.get('/api/orders/' + localStorage.userId)
          .then(response => {
            this.ordersList = response.body.data.list
            console.log(this.ordersList);
          })
      },
      confirmDelOrder(item){
        if(confirm('是否删除?')){
          this.delOrder(item)
        }
        // console.log(this.ordersList);
      },
      delOrder(item){
        this.$http.delete('/api/orders/' + item.orderNo + '/' + localStorage.userId)
          .then(response => {
            alert('取消成功')
          })
      },
      turnToSimpleOrder(item){
        if(item.status === 10){
          console.log(item);
          this.$router.push({
            name: 'Pay',
            params: {
              orderMsg: item
            }
          })
        }else{
          this.$router.push({
            name: 'SimpleOrder',
            params: {
              orderMsg: item
            }
          })
        }


      }
    }
  }
</script>

<style scoped>

</style>
