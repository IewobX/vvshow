<template>
  <div id="app">
    <router-view/>
    <Tabs></Tabs>
  </div>
</template>

<script>
import './assets/less/site.less'
import Tabs from '@/components/Tabs'

export default {
  name: 'App',
  components: {
    Tabs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
