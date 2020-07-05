<template>
  <section class="home">
    <VtFeaturedModule />
    <VtHomeModule />
    <VtTopDistinationModule />
  </section>
</template>

<script>
import VtFeaturedModule from '@module/VtFeaturedModule'
import VtHomeModule from '@module/VtHomeModule'
import VtTopDistinationModule from '@module/VtTopDistinationModule'
export default {
  name: 'Home',
  components: {
    VtFeaturedModule,
    VtHomeModule,
    VtTopDistinationModule
  }
}
</script>
