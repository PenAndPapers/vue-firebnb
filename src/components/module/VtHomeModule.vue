<template>
  <div class="home-module w-full">
    <h2 class="text-10 my-12">See what a difference a stay makes</h2>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      <router-link
        to="/properties"
        v-for="(category, index) in categories"
        :key="index"
      >
        <VtPropertyCategoryCard :category="category"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import VtPropertyCategoryCard from '@common/VtPropertyCategoryCard'
export default {
  name: 'VtHomeModule',
  components: {
    VtPropertyCategoryCard
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
    async getCategory () {
      await fetch('/data/category.json')
        .then(result => result.json())
        .then(response => {
          if (response.data) this.categories = response.data
        })
    }
  },
  mounted () {
    this.getCategory()
  }
}
</script>
