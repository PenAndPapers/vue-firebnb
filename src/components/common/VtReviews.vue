<template>
  <div class="reviews">
    <h2 class="text-8 font-400 mb-8">Reviews</h2>
    <div class="grid grid-cols-12 gap-8">
      <VtReviewCard
        class="col-span-6 mb-4"
        v-for="(review, index) in reviews"
        :key="index"
        :review="review"
      />
    </div>
  </div>
</template>

<script>
import VtReviewCard from '@common/VtReviewCard'
export default {
  name: 'VtReviews',
  props: {
    reviews: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    VtReviewCard
  }
}
</script>
