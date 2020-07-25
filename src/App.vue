<template>
  <div id="app" class="bg-app">
    <VtNavigation />
    <main class="container w-xxl m-auto">
      <VtSearchBar class="my-6" />
      <router-view/>
    </main>
    <VtFooter />
  </div>
</template>
<script>
import VtNavigation from '@layout/VtNavigation'
import VtSearchBar from '@layout/VtSearchBar'
import VtFooter from '@layout/VtFooter'
export default {
  name: 'App',
  components: {
    VtNavigation,
    VtSearchBar,
    VtFooter
  }
}
</script>
