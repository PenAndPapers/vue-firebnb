<template>
  <div class="account-button relative">
    <button
      class="flex items-center px-8 py-2 rounded-full bg-transparent shadow-sm outline-none focus:outline-none text-white text-5 font-500"
      @click="isDropDown = !isDropDown"
    >
      <span class="mr-1 text-white hover:underline">{{ firstName }}</span>
      <i class="material-icons text-5 text-white">person</i>
    </button>
    <div class="dropdown-menu w-full absolute top-12 bg-white z-40 rounded-bl-md rounded-br-md shadow-lg" v-show="isDropDown">
      <router-link to="profile" class="block px-4 py-2 text-4 hover:bg-gray-100">My Profile</router-link>
      <router-link to="settings" class="block px-4 py-2 text-4 hover:bg-gray-100">Settings</router-link>
      <a
        href="#"
        class="block px-4 py-2 text-4 hover:bg-gray-100"
        @click.stop.prevent="logOut">Logout</a>
    </div>
  </div>
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
  },
  data () {
    return {
      isDropDown: false
    }
  },
  watch: {
    $route: {
      handler (newVal, oldVal) {
        this.isDropDown = false
      }
    }
  },
  methods: {
    async logOut () {
      await this.$store.dispatch('Auth/logOut').then(response => {
        if (response.data.logout) this.$router.push('/')
      })
    }
  }
}
</script>
