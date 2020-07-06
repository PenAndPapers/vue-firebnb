<template>
  <div class="location">
    <h2 class="text-8 font-400 mb-8">Location</h2>
    <VtMapBox />
  </div>
</template>

<script>
import VtMapBox from '@common/VtMapBox'
export default {
  name: 'VtLocation',
  components: {
    VtMapBox
  }
}
</script>
