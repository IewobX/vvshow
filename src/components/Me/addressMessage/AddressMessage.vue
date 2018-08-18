<template>
  <div class="address_message">
    123
  </div>
</template>

<script>
export default {
  name: "address-message",
  mounted() {
    console.log(localStorage.userId);

    this.$http.get('/api/shipping/' + localStorage.userId)
      .then(response => {
        console.log(response.body.data);
      })
  }
}
</script>

<style scoped>

</style>
