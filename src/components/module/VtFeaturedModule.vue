<template>
  <div class="featured-module">
    <VtSliderAccordion :items="items" />
  </div>
</template>

<script>
import VtSliderAccordion from '@common/VtSliderAccordion'
export default {
  name: 'VtFeaturedModule',
  components: {
    VtSliderAccordion
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    async getFeatured () {
      await fetch('/data/featured.json')
        .then(result => result.json())
        .then(response => {
          if (response.data.length) this.items = response.data
        })
    }
  },
  mounted () {
    this.getFeatured()
  }
}
</script>
