<template>
  <div class="classify">
    <search></search>
    <div class="product_category">
      <div class="category_tab">
        <ul>
          <router-link  :to="{name: 'categoryName', params: {category : item.id}}" :key="$route.fullPath + item.id" v-for="item in categories" tag="li">
            {{item.name}}
          </router-link>
        </ul>
      </div>
      <div class="category_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Search from './Search'
import '../assets/less/classify.less'
export default {
  name: 'classify',
  data () {
    return {
      categories: []
    }
  },
  methods: {
    getCategory (id) {
      return new Promise(((resolve) => {
        this.$http.get('/api/categories/parallel/' + id)
          .then(response => {
            if (response.body.success) {
              resolve(response.body.data)
            }
          })
      }))
    }
  },

  mounted() {
    this.getCategory(0).then(result => {
      this.categories = result
    })
  },
  components: {
    Search
  }
}
</script>

<style scoped>

</style>
