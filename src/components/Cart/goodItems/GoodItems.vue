<template>
    <div class="good_items">
      <div class="item" v-for="(item, index) in items">
        <div class="checkbox">
          <input type="checkbox" :checked="item.checked" @click="select(item)"/>
        </div>
        <img />
        <div class="details">
          <p>{{item.name}}</p>
          <div class="num">
            <div class="simplePrice">¥{{item.price}}</div>
            <button @click="simpleNumber(item,'-')">-</button>
            <input type="text" v-model="item.number">
            <button @click="simpleNumber(item,'+')">+</button>
          </div>
          <a class="del" @click="delItem(index)">删除</a>
          <div class="total">¥{{item.price*item.number}}</div>
        </div>
      </div>
      <div class="alltotal">
        <div class="checkbox">
          <input type="checkbox" @click="selectedAll" :checked="isSelectedAll"/>
        </div>
        <span>总计:</span>
        <span class="alltotalValue" v-text="alltotalPrice">123</span>
        <div class="pay">去支付</div>
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
    this.items = [
      {name: '果缤纷', price: 4, number: 1, checked: false},
      {name: '康师傅', price: 1, number: 1, checked: false}
    ]
  },
  methods: {
    simpleNumber (item, flag) {
      if (flag === '+') {
        item.number++
      }
      if (flag === '-') {
        if (item.number <= 1) {
          item.number = 1
          return
        }
        item.number--
      }
      this.alltotalValue()
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
      this.alltotalValue()
    },
    selectedAll () {
      this.isSelectedAll = !this.isSelectedAll
      this.items.forEach((value, index) => {
        value.checked = this.isSelectedAll
      })
      this.alltotalValue()
    },
    alltotalValue () {
      this.alltotalPrice = 0
      this.items.forEach(item => {
        if (item.checked) {
          this.alltotalPrice += item.price * item.number
        }
      })
    },
    delItem (index) {
      let r = confirm('确认删除?')
      if (r === true) {
        this.items.splice(index,1)
        this.alltotalValue()
      }
    }
  }
}
</script>

<style scoped>

</style>
