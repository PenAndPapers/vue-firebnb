<template>
  <article class="property-card text-center overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer">
    <div class="relative pb-7/12">
      <img
        class="w-full bg-gray-900 absolute top-0 bottom-0 left-0 right-0 h-full w-full"
        :src="property.image_url[0]"
        alt=""
      >
    </div>
    <div class="information p-4 bg-white">
      <div class="flex items-baseline justify-center">
        <h4 class="name flex-1 text-left text-4 clamp-2">{{ property.name }}</h4>
        <div class="price text-right pl-3">
          <h4 class="text-5 font-600">${{ totalPrice }} total</h4>
          <h6 class="text-3 font-600">${{ property.price }}/night</h6>
        </div>
      </div>
      <p class="description text-left text-3 my-5">
        {{ property.package }}
      </p>
      <div class="flex items-center justify-center">
        <div class="tags flex-1 text-left">
          <VtTag
            class="inline-block mr-1 mb-1"
            v-for="(tag, index) in property.tags"
            :key="index"
            :tag="tag"
          />
        </div>
        <VtRate
          class="flex items-center pl-3"
          :rate="property.rate"
        />
      </div>
    </div>
  </article>
</template>

<script>
import VtTag from '@element/VtTag'
import VtRate from '@element/VtRate'
export default {
  name: 'VtPropertyCard',
  props: {
    property: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    totalPrice () {
      return this.property.price * Math.floor(Math.random() * Math.floor(5) + 1)
    }
  },
  components: {
    VtTag,
    VtRate
  }
}
</script>
