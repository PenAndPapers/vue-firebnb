<template>
  <div class="image-masonry">
    <div class="grid grid-cols-12 gap-4">
      <div
        class="item relative pb-47%"
        v-for="(image, index) in images"
        :key="index"
        :class="[[0, 5].includes(index) ? 'col-span-5' : 'col-span-3', [1,4].includes(index) ? 'col-span-4' : '']"
      >
        <img
          class="absolute h-full w-full bg-gray-500"
          :src="image"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtImageMasonry',
  props: {
    images: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>
