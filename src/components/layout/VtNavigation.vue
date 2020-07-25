<template>
  <nav class="bg-gray-900 p-5">
    <div class="container w-xxl m-auto flex justify-between">
      <div>
        <router-link
          class="flex items-center"
          to="/"
        >
          <i class="fas fa-fire-alt text-10 text-red-600 inline-block mr-2" />
          <span class="text-6 text-red-600 font-600">firebnb</span>
        </router-link>
      </div>
      <div class="menu flex items-center">
        <VtAccountButton
          :first-name="'Gabby'"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import VtAccountButton from '@common/VtAccountButton'
export default {
  name: 'VtNavigation',
  components: {
    VtAccountButton
  }
}
</script>
