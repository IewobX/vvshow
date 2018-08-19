<template>
  <div class="address_message">
    {{address.list}}
    <div class="address_item">

    </div>
    <div class="add_">
      <!--<button @click="turnToAdd">新增</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "address-message",
  data (){
    return {
      address: ''
    }
  },
  mounted() {
    console.log(localStorage.userId);

    this.$http.get('/api/shipping/' + localStorage.userId)
      .then(response => {
        this.address = response.body.data
        console.log(response.body.data);
      })
  }
}
</script>

<style scoped>

</style>
