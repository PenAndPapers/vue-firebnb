<template>
  <div class="booking-form sticky top-12 rounded-md shadow-lg p-8">
    <div class="flex items-center justify-between">
      <h2 class="text-6 font-500">${{ property.price }}/night</h2>
      <p>
        <VtRate :rate="property.rate" />
        <span>( {{ property.reviews.length }} )</span>
      </p>
    </div>
    <div class="border-1 border-gray-300 my-4 rounded-md">
      <div class="flex">
        <div class="flex-1 p-4">
          <label class="block text-3 font-500" for="">Check in</label>
          <input type="text" class="text-4 font-600 w-full" placeholder="Add date">
        </div>
        <div class="flex-1 border-l-1 border-gray-300 p-4">
          <label class="block text-3 font-500" for="">Check out</label>
          <input type="text" class="text-4 font-600 w-full" placeholder="Add date">
        </div>
      </div>
      <div class="flex">
        <div class="flex-1 border-t-1 border-gray-300 p-4">
          <label class="block text-3 font-500" for="">Guest</label>
          <input type="text" class="text-4 font-600 w-full" placeholder="Add guests">
        </div>
      </div>
    </div>
    <button class="bg-red-600 hover:bg-red-500 text-5 text-white font-500 p-4 w-full rounded-md shadow-md hover:shadow-lg outline-none focus:outline-none">
      Check availability
    </button>
  </div>
</template>

<script>
import VtRate from '@element/VtRate'
export default {
  name: 'VtBookingForm',
  props: {
    property: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  components: {
    VtRate
  }
}
</script>
