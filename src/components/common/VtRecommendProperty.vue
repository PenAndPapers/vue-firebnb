<template>
  <div class="recommend-properties">
    <h2 class="text-8 font-400 mb-8">Nearby places to stay</h2>
    <div class="grid grid-cols-12 gap-4">
      <router-link
        class="col-span-3"
        :to="'/property/' + property.name.replace(/ /g, '-').toLowerCase()"
        v-for="(property, index) in properties"
        :key="index"
      >
        <VtRecommendPropertyCard :property="property"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import VtRecommendPropertyCard from '@common/VtRecommendPropertyCard'
export default {
  name: 'VtRecommendProperty',
  props: {
    properties: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    VtRecommendPropertyCard
  }
}
</script>
