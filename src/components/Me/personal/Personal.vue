<template>
    <div class="personal">
      {{user}}
    </div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.$http.get('/api/user/' + this.userId)
      .then(response => {
        console.log(response.body)
        if (response.body.success) {
          this.user = response.body.data
        }
      })
  },
  props: ['userId']
}
</script>

<style scoped>

</style>
