<template>
  <div class="top-destination-module w-full mb-16">
    <h2 class="text-10 my-16">Top Trips Distination</h2>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
      <VtTopDestinationCard
        v-for="(destination, index) in destinations"
        :key="index"
        :destination="destination"
      />
    </div>
  </div>
</template>

<script>
import VtTopDestinationCard from '@common/VtTopDestinationCard'

export default {
  name: 'VtTopDestinationModule',
  components: {
    VtTopDestinationCard
  },
  data () {
    return {
      destinations: []
    }
  },
  methods: {
    async getDestination () {
      await fetch('/data/destination.json')
        .then(result => result.json())
        .then(response => {
          if (response.data) this.destinations = response.data
        })
    }
  },
  mounted () {
    this.getDestination()
  }
}
</script>
