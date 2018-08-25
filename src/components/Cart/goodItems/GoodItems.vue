<template>
    <div class="good_items">
      <div class="item" v-for="(item, index) in items">
        <div class="checkbox">
          <input type="checkbox" :checked="item.checked" @click="select(item)"/>
        </div>
        <div class="proImg">
          <img src="../../../assets/logo.png"/>
        </div>
        <div class="details">
          <p>{{item.productName}}</p>
          <div class="num">
            <div class="simplePrice">¥{{item.productPrice}}</div>
            <button @click="simpleNumber(item,'-')">-</button>
            <input type="text" v-model="item.quantity">
            <button @click="simpleNumber(item,'+')">+</button>
          </div>
          <a class="del" @click="confirmDelItem(item,index)">删除</a>
          <div class="total">¥{{item.productPrice*item.quantity}}</div>
        </div>
      </div>
      <div class="alltotal">
        <div class="checkbox">
          <input type="checkbox" @click="selectedAll" :checked="isSelectedAll"/>
        </div>
        <span>总计:</span>
        <span class="alltotalValue" v-text="alltotalPrice">123</span>
        <div class="pay" @click="turnToOrder">去结算</div>
      </div>
    </div>
</template>

<script>
import './GoodItems.less'
export default {
  name: 'good-items',
  data () {
    return {
      items: [],
      isSelectedAll: false,
      alltotalPrice: 0
    }
  },
  mounted () {
    this.$http.get('/api/carts/' + localStorage.userId)
      .then(response => {
        this.items = response.body.data.cartProductVOList
      })
  },
  methods: {
    simpleNumber (item, flag) {
      console.log(item);
      if (flag === '+') {
        item.quantity++
      }
      if (flag === '-') {
        if (item.quantity <= 1) {
          item.quantity = 1
          return
        }
        item.quantity--
      }
      this.allTotalValue()
      this.modifyItem(item)
    },
    select (item) {
      item.checked = !item.checked
      let result = true
      this.items.forEach((value, index) => {
        if (value.checked === false) {
          result = false
        }
      })
      this.isSelectedAll = result
      this.allTotalValue()
    },
    selectedAll () {
      this.isSelectedAll = !this.isSelectedAll
      this.items.forEach((value, index) => {
        value.checked = this.isSelectedAll
      })
      this.allTotalValue()
    },
    allTotalValue () {
      this.alltotalPrice = 0
      this.items.forEach(item => {
        if (item.checked) {
          this.alltotalPrice += item.productPrice * item.quantity
        }
      })
    },
    confirmDelItem (item,index) {
      let r = confirm('确认删除?')
      if (r === true) {
        this.items.splice(index,1)
        this.allTotalValue()
        this.delItem(item)
      }
    },
    modifyItem(item){
      this.$http.put('/api/carts/' + localStorage.userId + '/' + item.productId + '?count=' + item.quantity)
        .then(response => {
          // console.log(response.body.data);
        })
    },
    delItem(item){
      this.$http.delete('/api/carts/' + localStorage.userId + '?productIds=' + item.productId)
        .then(response => {
          console.log(response.body.data);
        })
    },
    turnToOrder(){
      let order = []
      this.items.forEach(item => {
        if (item.checked) {
          order.push(item)
        }
      })
      localStorage.order = JSON.stringify(order)
      this.$router.push({
        name: 'CreateOrder'
      })
    },
  }
}
</script>

<style scoped>

</style>
