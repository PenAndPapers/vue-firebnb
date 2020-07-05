<template>
  <div class="review-card">
    <div class="flex items-start">
      <div class="mr-6 text-center">
        <img
          class="rounded-full block m-auto"
          :src="review.user.image_url[0]"
          alt=""
        >
        <p class="text-3 font-500">{{ review.user.first }}</p>
        <p class="text-3 text-gray-700">{{ date }}</p>
      </div>
      <div class="flex-1">
        <p class="text-4 font-300 clamp-5">{{ review.review }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtReviewCard',
  props: {
    review: Object,
    default: () => {},
    required: () => true
  },
  computed: {
    date () {
      const date = new Date(this.review.date)
      return date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear()
    }
  }
}
</script>
