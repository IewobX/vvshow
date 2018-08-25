<template>
  <div class="operate_address">
    <div class="header">地址操作<span class="del" @click="del" v-if="isMod">删除</span></div>
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
      <button class="btn_" @click="Save_">保存地址</button>
    </div>
  </div>
</template>

<script>
  import './OperateAddress.less'
  import VDistpicker from 'v-distpicker'
  export default {
    name: "add-address",
    data(){
      return {
        isMod: '',
        areaSelect:false,
        receiverMsg: {
          id: '',
          receiverName:'',
          receiverMobile:'',
          receiverProvince:'',
          receiverZip:'',
          receiverCity:'',
          receiverDistrict:'',
          receiverAddress:''
        }
      }
    },
    mounted(){
      console.log(this.$route.params);
      if(this.$route.params.item) {
        this.isMod = true
        this.receiverMsg = this.$route.params.item
      }
      else{
        this.isMod = false
      }
    },
    methods:{
      onSelected(data){
        this.receiverMsg.receiverProvince = data.province.value
        this.receiverMsg.receiverCity = data.city.value
        this.receiverMsg.receiverDistrict = data.area.value
        this.receiverMsg.receiverZip = data.area.code
        this.areaSelect = false
      },
      Save_() {
        if(!this.receiverMsg.receiverName){
          alert('请输入用户名')
          return
        }
        if(!this.receiverMsg.receiverMobile){
          alert('请输入电话号码')
          return
        }
        if(!this.receiverMsg.receiverDistrict){
          alert('请输入地址')
          return
        }
        this.isMod?this.ModMsg():this.AddMsg();
      },
      ModMsg(){
        this.$http.put('/api/shipping/' + localStorage.userId,this.receiverMsg)
          .then(response => {
            console.log('修改')
            alert(response.body.data)
            this.turnToAddressMessage()
          })
      },
      AddMsg(){
        this.$http.post('/api/shipping/' + localStorage.userId,this.receiverMsg)
          .then(response => {
            if(response.body.success){
              console.log('新增')
              alert('新增地址成功')
              this.turnToAddressMessage()
            }
          })
      },
      del(){
        this.$http.delete('/api/shipping/' + localStorage.userId + "/" + this.receiverMsg.id)
          .then(response => {
            alert(response.body.data)
            this.turnToAddressMessage()
          })
      },
      turnToAddressMessage(){
        this.$router.push({
          name: 'AddressMessage',
          params: {
            choose: this.$route.params.flag
          }
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
