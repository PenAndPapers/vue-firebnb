<template>
  <div class="property-module w-full">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      <router-link
        :to="'/property/' + property.name.replace(/ /g, '-').toLowerCase()"
        v-for="(property, index) in properties"
        :key="index"
      >
        <VtPropertyCard :property="property" />
      </router-link>
    </div>
  </div>
</template>

<script>
import VtPropertyCard from '@common/VtPropertyCard'

export default {
  name: 'VtPropertiesModule',
  components: {
    VtPropertyCard
  },
  data () {
    return {
      properties: []
    }
  },
  methods: {
    async getProperty () {
      await fetch('/data/property.json')
        .then(result => result.json())
        .then(response => {
          if (response.data) this.properties = response.data
        })
    }
  },
  mounted () {
    this.getProperty()
  }
}
</script>
