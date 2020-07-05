<template>
  <button class="flex items-center rounded-full bg-white hover:bg-gray-100 shadow-sm hover:shadow-md outline-none focus:outline-none px-6 py-2">
    <span>{{ firstName }}</span>
    <i class="material-icons">person</i>
  </button>
</template>

<script>
export default {
  name: 'VtAccountButton',
  props: {
    firstName: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
