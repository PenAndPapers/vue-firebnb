<template>
  <span class="rate">
    <i class="material-icons text-4 text-red-600">star</i> {{ rate }}
  </span>
</template>

<script>
export default {
  name: 'VtRate',
  props: {
    rate: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>
