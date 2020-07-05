<template>
  <div class="text-3 border-1 border-gray-500 px-3 py-1 rounded-full">
    {{ tag }}
  </div>
</template>

<script>
export default {
  name: 'VtTag',
  props: {
    tag: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
