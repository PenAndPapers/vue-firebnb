<template>
  <div class="property-module">
    <div class="flex items-center justify-between">
      <div class="name-and-price">
        <h2 class="text-10 font-400">{{ property.name }}</h2>
        <h3 class="text-5 text-blue-600 font-500">${{ property.price }}/night</h3>
      </div>
      <div class="rating">
        <VtRate :rate="property.rate" />
        <span>( {{ property.reviews.length }} )</span>
      </div>
    </div>

    <VtImageMasonry class="mt-6 mb-12" :images="property.image_url" />

    <div class="grid grid-cols-12 gap-16" v-if="host && property">
      <div class="col-span-8">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-8 font-400">Entire apartment hosted by {{ host.name.first }}</h2>
            <p class="text-3">{{ property.package }}</p>
          </div>
          <img
            class="rounded-full bg-black"
            :src="host.picture.thumbnail"
            alt=""
          >
        </div>
        <hr class="my-8">
        <VtWysiwyg :html="property.description" />
        <hr class="my-8">
        <VtAminities :aminities="aminities" />
      </div>
      <div class="col-span-4">
        asdasd
      </div>
    </div>

    <div class="reviews">
      <h2 class="text-8 font-400 mt-4 mb-12">Reviews</h2>
      <div class="grid grid-cols-12 gap-8">
        <VtReviewCard
          class="col-span-4"
          v-for="(review, index) in property.reviews"
          :key="index"
          :review="review"
        />
      </div>
    </div>

  </div>
</template>

<script>
import VtRate from '@element/VtRate'
import VtImageMasonry from '@common/VtImageMasonry'
import VtAminities from '@common/VtAminities'
import VtReviewCard from '@common/VtReviewCard'
import VtWysiwyg from '@element/VtWysiwyg'
export default {
  name: 'VtPropertyModule',
  components: {
    VtRate,
    VtImageMasonry,
    VtAminities,
    VtReviewCard,
    VtWysiwyg
  },
  data () {
    return {
      property: '',
      host: ''
    }
  },
  computed: {
    aminities (property) {
      if (this.property) {
        const aminitiesCopy = [...this.property.aminities]
        return aminitiesCopy[0]
      }
      return []
    }
  },
  methods: {
    async getPropertyHost () {
      await fetch('https://randomuser.me/api/?results=1')
        .then(result => result.json())
        .then(response => {
          if (response.results.length) this.host = response.results[0]
        })
    },
    async getProperty () {
      await fetch('/data/property.json')
        .then(result => result.json())
        .then(response => {
          if (response.data.length) this.property = response.data[0]
        })
    }
  },
  mounted () {
    this.getPropertyHost()
    this.getProperty()
  }
}
</script>
