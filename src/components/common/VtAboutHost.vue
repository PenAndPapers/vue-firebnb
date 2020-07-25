<template>
  <div class="about-host">
    <div class="flex items-center mb-6">
      <img
        class="rounded-full bg-gray-500 mr-4"
        :src="host.image_url[0]"
        alt=""
      >
      <div>
        <h2 class="text-8 font-400">Hosted by {{ host.first_name}}</h2>
        <p>Joined in {{ dateJoined }}</p>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-7">
        <VtWysiwyg :html="host.about" />
      </div>
      <div class="col-span-5">
        <div class="flex items-center mb-2">
          <i class="material-icons text-red-600 mr-2">star</i> {{ host.reviews }} reviews
        </div>
        <div class="flex items-center mb-2">
          <i class="material-icons text-red-600 mr-2">verified_user</i> Identity Verified
        </div>
        <p class="mb-2">
          Response rate {{ host.response.rate }} %
        </p>
        <p class="mb-6">
          Response time {{ host.response.time }}
        </p>
        <button class="bg-red-600 hover:bg-red-500 text-5 text-white font-500 px-8 py-4 rounded-md shadow-md hover:shadow-lg outline-none focus:outline-none">Contact Host</button>
      </div>
    </div>
  </div>
</template>

<script>
import VtWysiwyg from '@element/VtWysiwyg'
export default {
  name: 'VtAboutHost',
  props: {
    host: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  components: {
    VtWysiwyg
  },
  computed: {
    dateJoined (host) {
      const date = new Date(this.host.date_joined)
      return date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear()
    }
  }
}
</script>
