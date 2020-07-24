<template>
  <div class="property-module" v-if="property">
    <div class="flex items-center justify-between">
      <div class="name-and-price">
        <h2 class="text-10 font-400">{{ property.name }}</h2>
      </div>
      <div class="rating text-right" >
        <h3 class="text-6 font-500">${{ property.price }}/night</h3>
        <VtRate :rate="property.rate" />
        <span>( {{ property.reviews.length }} )</span>
      </div>
    </div>
    <VtImageMasonry class="mt-6 mb-12" :images="property.image_url" />
    <div class="grid grid-cols-12 gap-20">
      <div class="col-span-8">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-8 font-400">Entire apartment hosted by {{ property.host.first_name }}</h2>
            <p class="text-3">{{ property.package }}</p>
          </div>
          <img
            class="rounded-full bg-black"
            :src="property.host.image_url[0]"
            alt=""
          >
        </div>
        <hr class="my-8">
        <VtWysiwyg :html="property.description" />
        <hr class="my-8">
        <VtAminities :aminities="aminities" />
      </div>
      <div class="col-span-4">
        <VtBookingForm :property="property" />
      </div>
    </div>
    <VtLocation />
    <hr class="my-12">
    <VtAboutHost :host="property.host" />
    <hr class="my-12">
    <VtReviews :reviews="property.reviews" />
    <hr class="my-12">
    <VtPolicies :policies="property.policy" />
    <hr class="my-12">
    <VtRecommendProperty :properties="recommendedProperties" />
  </div>
</template>

<script>
import VtRate from '@element/VtRate'
import VtImageMasonry from '@common/VtImageMasonry'
import VtAminities from '@common/VtAminities'
import VtLocation from '@common/VtLocation'
import VtAboutHost from '@common/VtAboutHost'
import VtReviews from '@common/VtReviews'
import VtPolicies from '@common/VtPolicies'
import VtBookingForm from '@common/VtBookingForm'
import VtRecommendProperty from '@common/VtRecommendProperty'
import VtWysiwyg from '@element/VtWysiwyg'
export default {
  name: 'VtPropertyModule',
  components: {
    VtRate,
    VtImageMasonry,
    VtAminities,
    VtLocation,
    VtAboutHost,
    VtReviews,
    VtPolicies,
    VtBookingForm,
    VtRecommendProperty,
    VtWysiwyg
  },
  data () {
    return {
      property: '',
      recommendedProperties: []
    }
  },
  computed: {
    aminities (property) {
      return [...this.property.aminities][0]
    }
  },
  methods: {
    async getProperty () {
      await fetch('/data/property.json')
        .then(result => result.json())
        .then(response => {
          if (response.data.length) this.property = response.data[0]
        })
    },
    async getRecommendedProperty () {
      await fetch('/data/property.json')
        .then(result => result.json())
        .then(response => {
          if (response.data.length) this.recommendedProperties = response.data.slice(25, 29)
        })
    }
  },
  mounted () {
    this.getProperty()
    this.getRecommendedProperty()
  }
}
</script>
