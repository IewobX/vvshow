<template>
    <div class="home">
      <search></search>
      <carousel></carousel>
      <navigation></navigation>
      <recommend></recommend>
    </div>
</template>

<script>
import Search from './Search'
import Carousel from './Home/carousel/Carousel'
import Navigation from './Home/navigation/Navigation'
import Recommend from './Home/recommend/Recommend'
export default {
  name: 'home',
  components: {
    Search,
    Carousel,
    Navigation,
    Recommend
  }
}
</script>

<style scoped>
/*.carousel{*/
  /*margin-top: 10vh;*/
/*}*/
</style>
