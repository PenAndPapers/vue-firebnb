<template>
  <div class="add-guest relative">
    <div
      class="cursor-pointer p-3"
      @click="isAddGuest = !isAddGuest"
    >
      <span class="block text-3 font-500">Guests</span>
      <span class="block text-4 font-500 w-full">Add guests</span>
    </div>
    <div class="dropdown w-full absolute top-0 z-30 bg-white shadow-lg" v-show="isAddGuest">
      <div
        class="option flex items-center justify-between px-3 py-4"
        v-for="(option, index) in options"
        :key="index"
      >
        <div class="">
          <p class="font-500">{{ option.type }}</p>
          <p class="text-3">{{ option.ageRage }}</p>
        </div>
        <div class="">
          <button
            class="h-8 w-8 inline-flex items-center justify-center rounded-full border-1 border-gray-600 hover:border-gray-700 text-6 font-300 outline-none focus:outline-none"
            @click="addGuest(option, '-')">-</button>
          <span class="inline-block min-w-12 text-6 text-center font-300">{{ option.count }}</span>
          <button
            class="h-8 w-8 inline-flex items-center justify-center rounded-full border-1 border-gray-600 hover:border-gray-700 text-6 font-300 outline-none focus:outline-none"
            @click="addGuest(option, '+')">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtAddGuest',
  data () {
    return {
      options: [
        {
          type: 'Adults',
          ageRage: '13 yrs old or above',
          count: 0
        },
        {
          type: 'Children',
          ageRage: '2-12 yrs old',
          count: 0
        },
        {
          type: 'Infants',
          ageRage: 'Under 2',
          count: 0
        }
      ],
      isAddGuest: false
    }
  },
  watch: {
    $route: {
      handler (newVal, oldVal) {
        this.isAddGuest = false
      }
    }
  },
  methods: {
    addGuest (option, operation) {
      if (operation === '+') {
        if (['Children', 'Infants'].includes(option.type) && option.count >= 5) return
        if (option.type === 'Adults' && option.count >= 16) return
        option.count += 1
      }

      if (operation === '-' && option.count !== 0) {
        option.count -= 1
      }
    }
  }
}
</script>
