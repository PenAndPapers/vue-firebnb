<template>
  <div class="add-guest w-full bg-white shadow-lg">
    <div
      class="option flex items-center justify-between px-3 py-4"
      v-for="(option, index) in options"
      :key="index"
    >
      <div class="">
        <p>{{ option.type }}</p>
        <p class="text-3">{{ option.ageRage }}</p>
      </div>
      <div class="">
        <button
          class="h-6 w-6 inline-flex items-center justify-center rounded-full border-1 border-gray-900 text-5 outline-none focus:outline-none"
          @click="addGuest(option, '-')">-</button>
        <span class="inline-block min-w-8 text-5 text-center font-300">{{ option.count }}</span>
        <button
          class="h-6 w-6 inline-flex items-center justify-center rounded-full border-1 border-gray-900 text-5 outline-none focus:outline-none"
          @click="addGuest(option, '+')">+</button>
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
      ]
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
