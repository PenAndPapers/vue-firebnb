<template>
  <div class="backdrop w-full h-full flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-50" v-show="isLogin || isRegister">
    <div class="form-container relative bg-white p-8 rounded-md w-1/4">
      <i class="far fa-times-circle absolute top-4 right-8 text-5 font-500 cursor-pointer" @click="$store.dispatch('Auth/hideAuthForm')" />
      <h2 class="mb-2 text-center text-6 font-500 leading-none">{{ isLogin ? 'Login' : 'Create an account' }}</h2>
      <div class="flex-1 border-t-1 border-gray-500 mb-4" />

      <form @submit.stop.prevent="authenticateAccount">
        <div class="form-row mb-3 py-1 px-4 border-1 border-gray-500 rounded-md">
          <label class="block text-3" for="email">Email</label>
          <input type="text" id="email" class="w-full bg-transparent font-500" maxlength="50" v-model="email">
        </div>
        <div class="form-row mb-3 py-1 px-4 border-1 border-gray-500 rounded-md">
          <label class="block text-3" for="password">Password</label>
          <input type="password" id="password" class="w-full bg-transparent font-500" maxlength="50" v-model="password">
        </div>
        <button class="w-full py-3 px-4 bg-red-600 hover:bg-red-700 rounded-md text-white text-4 font-400 outline-none focus:outline-none">{{ isLogin ? 'Login' : 'Register' }}</button>
      </form>

      <div class="divider flex items-center my-4">
        <div class="flex-1 border-t-1 border-gray-500" />
        <span class="mx-4">or</span>
        <div class="flex-1 border-t-1 border-gray-500" />
      </div>

      <button class="w-full mb-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Continue with Facebook</button>
      <button class="w-full mb-2 py-3 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Continue with Google</button>
      <button class="w-full mb-2 py-3 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Continue with Twitter</button>
      <button class="w-full mb-2 py-3 px-4 bg-pink-600 hover:bg-pink-700 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Continue with Instagram</button>

      <p v-if="isLogin">
        Dont have an account?
        <a href="#" class="font-500" @click.stop.prevent="$store.dispatch('Auth/showRegistration')">Register</a>
      </p>
      <p v-if="isRegister">
        Already have an account?
        <a href="#" class="font-500" @click.stop.prevent="$store.dispatch('Auth/showLogin')">Login</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'VtRegister',
  data () {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'Auth/_isLogin',
      isRegister: 'Auth/_isRegister'
    })
  },
  methods: {
    authenticateAccount () {
      if (!this.email || !this.password) return false

      const payload = {
        email: this.email.trim(),
        password: this.password.trim()
      }

      this.$store.dispatch('Auth/authenticateAccount', payload)
      this.email = this.password = null
    }
  }
}
</script>
