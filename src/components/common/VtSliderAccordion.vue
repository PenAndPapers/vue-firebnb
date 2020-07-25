<template>
  <div class="slider-accordion flex w-full">
    <div
      class="item bg-cover bg-center bg-gray-400 relative pb-2/5 transition-all duration-300"
      :class="[index === 0 ? 'expanded w-1/2' : 'w-1/6']"
      v-for="(item, index) in items"
      :key="index"
      :style="{'background-image': 'url('+ item.image_url[0] +')'}"
      @mouseover="expandItem(index)"
    >
      <router-link class="absolute h-full w-full" :to="'/property/' + item.name.replace(/ /g, '-').toLowerCase()">
        <div class="absolute bottom-0 p-4 w-full min-h-24 bg-black bg-opacity-35">
          <h3 class="text-5 text-white leading-none clamp-3">{{ item.name }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtSliderAccordion',
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    expandItem (index) {
      const item = document.querySelectorAll('.item')[index]
      const expandedItem = document.querySelector('.expanded')

      if (!item.classList.contains('expanded')) {
        expandedItem.classList.remove('expanded', 'w-1/2')
        expandedItem.classList.add('w-1/6')

        item.classList.remove('w-1/6')
        item.classList.add('expanded', 'w-1/2')
      }
    }
  }
}
</script>
