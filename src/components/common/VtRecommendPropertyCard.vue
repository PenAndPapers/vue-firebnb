<template>
  <article class="recommend-property-card text-center overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer">
    <div class="relative pb-7/12">
      <img
        class="w-full bg-black absolute top-0 bottom-0 left-0 right-0 h-full w-full"
        :src="property.image_url[0]"
        alt=""
      >
    </div>
    <div class="information p-4">
      <h4 class="name text-left text-4 clamp-2">{{ property.name }}</h4>
      <div class="price flex items-center justify-between">
        <h6 class="text-4 font-600">${{ property.price }}/night</h6>
        <VtRate
          class="flex items-center pl-3"
          :rate="property.rate"
        />
      </div>
    </div>
  </article>
</template>

<script>
import VtRate from '@element/VtRate'
export default {
  name: 'VtRecommendPropertyCard',
  props: {
    property: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    VtRate
  }
}
</script>
