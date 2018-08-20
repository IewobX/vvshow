<template>
  <div class="add_address">
    <div class="header">新增地址</div>
    <div class="main">
      <label>收货人姓名: </label><input type="text" v-model="receiverMsg.receiverName" placeholder="请输入收货人姓名"/><br />
      <label>电&nbsp;话&nbsp;号&nbsp;码:&nbsp; </label><input type="text" v-model="receiverMsg.receiverMobile" placeholder="请输入电话号码"/><br />
      <button class="at_area" @click="areaSelect = !areaSelect">所在地区: </button>
      <span v-text="receiverMsg.receiverProvince"></span>
      <span v-text="receiverMsg.receiverCity"></span>
      <span v-text="receiverMsg.receiverDistrict"></span><br />
      <div class="areaSelect" v-if="areaSelect">
        <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
      </div>
      <label>详细地址: </label><br />
      <textarea v-model="receiverMsg.receiverAddress"></textarea>
      <button class="add_btn" @click="Add_">+新增地址</button>
    </div>
  </div>
</template>

<script>
  import './AddAddress.less'
  import VDistpicker from 'v-distpicker'
  export default {
    name: "add-address",
    data(){
      return {
        areaSelect:false,
        receiverMsg: {
          receiverName:'',
          receiverMobile:'',
          receiverProvince:'',
          receiverCity:'',
          receiverDistrict:'',
          receiverAddress:''
        }
      }
    },
    methods:{
      onSelected(data){
        this.receiverMsg.receiverProvince = data.province.value
        this.receiverMsg.receiverCity = data.city.value
        this.receiverMsg.receiverDistrict = data.area.value
        this.areaSelect = false
      },
      Add_() {
        this.$http.post('/api/shipping/' + localStorage.userId,this.receiverMsg)
          .then(response => {
            console.log(response.body);
          })
      }

    },
    components: {
      VDistpicker
    }
  }
</script>

<style scoped>

</style>
