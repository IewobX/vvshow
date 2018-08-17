<template>
  <div class="tabs">
    <ul>
      <router-link :to="{name: 'Home'}" tag="li" exact><span class="home"></span></router-link>
      <router-link :to="{name: 'Classify'}" tag="li" exact><span class="clsfy"></span> </router-link>
      <router-link :to="{name: 'Cart'}" tag="li" exact><span class="cart"></span></router-link>
      <router-link :to="{name: 'Me'}" tag="li" exact><span class="me"></span></router-link>
    </ul>
  </div>
</template>

<script>
import '../assets/less/tabs.less'
export default {
  name: 'tabs'
}
</script>

<style scoped>

</style>
