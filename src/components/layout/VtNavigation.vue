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
        <button
          class="activator flex items-center mr-2 px-4 py-2 rounded-md bg-transparent text-white text-5 font-500 hover:underline outline-none focus:outline-none"
          @click="$store.dispatch('Auth/showLogin')"
          v-if="!user"
        >
          Login
        </button>
        <button
          class="activator flex items-center px-4 py-2 rounded-md bg-transparent text-white text-5 font-500 hover:underline outline-none focus:outline-none"
          @click="$store.dispatch('Auth/showRegistration')"
          v-if="!user"
        >
          Create an account
        </button>
        <VtAccountButton
          :first-name="'Bernadette'"
          v-if="user"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import VtAccountButton from '@common/VtAccountButton'
export default {
  name: 'VtNavigation',
  components: {
    VtAccountButton
  },
  computed: {
    ...mapGetters({
      user: 'Auth/_user'
    })
  }
}
</script>
