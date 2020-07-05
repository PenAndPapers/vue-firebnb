<template>
  <div class="top-destination-card">
    <router-link to="/">{{ destination }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'VtTopDestinationCard',
  props: {
    destination: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
