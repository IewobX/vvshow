<template>
  <div class="carousel">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './Carousel.less'
export default {
  name: 'carousel',
  mounted () {
    new Swiper('.swiper-container', {
      loop: true
    })
  }
}
</script>

<style scoped>

</style>
