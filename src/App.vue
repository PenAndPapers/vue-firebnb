<template>
  <div id="app" class="bg-app">
    <VtNavigation />
    <main class="container w-xxl m-auto min-h-screen">
      <VtSearchBar class="my-6" />
      <router-view/>
    </main>
    <VtFooter />
    <VtAuthForm />
  </div>
</template>
<script>
import VtNavigation from '@layout/VtNavigation'
import VtSearchBar from '@layout/VtSearchBar'
import VtFooter from '@layout/VtFooter'
import VtAuthForm from '@common/VtAuthForm'
export default {
  name: 'App',
  components: {
    VtNavigation,
    VtSearchBar,
    VtFooter,
    VtAuthForm
  }
}
</script>
