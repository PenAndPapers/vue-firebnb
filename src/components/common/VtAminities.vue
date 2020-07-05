<template>
  <div class="aminities">
    <h3 class="text-8 font-400">Aminities</h3>
    <div
      class="my-8"
      v-for="(aminity, index) in aminities"
      :key="index"
    >
      <h3 class="text-6 capitalize mb-6">{{ index.replace(/_/g, ' ') }}</h3>
      <div
        class="mb-3"
        v-for="(description, name) in aminity"
        :key="name"
      >
        <h5 class="capitalize text-4 font-500">{{ name.replace(/_/g, ' ') }}</h5>
        <p class="text-4 font-300">{{ description }}</p>
      </div>
      <hr class="my-8">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtAminities',
  props: {
    aminities: {
      type: Object,
      default: () => [],
      required: true
    }
  }
}
</script>
