<template>
  <article class="property-category-card text-left overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer">
    <div class="relative pb-7/12">
      <img
        class="w-full bg-gray-900 absolute top-0 bottom-0 left-0 right-0 h-full w-full"
        :src="category.image_url[0]"
        alt=""
      >
    </div>
    <div class="information p-4 bg-white">
      <h4 class="text-5 font-500 leading-none mb-2 min-h-6 clamp-2">{{ category.name }}</h4>
      <p class="text-3 min-h-8 clamp-2">{{ category.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'VtCategoryCard',
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>
