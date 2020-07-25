<template>
  <div class="account-button relative">
    <button
      class="flex items-center rounded-full bg-white hover:bg-gray-100 shadow-sm hover:shadow-md outline-none focus:outline-none px-8 py-2"
      @click="isDropDown = !isDropDown"
    >
      <span class="mr-2">{{ firstName }}</span>
      <i class="material-icons">person</i>
    </button>
    <div class="dropdown-menu w-full absolute top-12 bg-white z-40 shadow-lg" v-show="isDropDown">
      <router-link to="profile" class="block px-4 py-2 text-4 hover:bg-gray-100">My Profile</router-link>
      <router-link to="settings" class="block px-4 py-2 text-4 hover:bg-gray-100">Settings</router-link>
      <router-link to="logout" class="block px-4 py-2 text-4 hover:bg-gray-100">Logout</router-link>
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
  }
}
</script>
