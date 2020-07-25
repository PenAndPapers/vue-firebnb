<template>
  <div class="login">
    <button
      class="activator flex items-center rounded-full bg-white hover:bg-gray-100 shadow-sm hover:shadow-md outline-none focus:outline-none px-8 py-2"
      @click="isRegster = !isRegster"
    >
      Login
    </button>
    <div class="backdrop w-full h-full flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-50">
      <div class="form-container bg-white p-8 rounded-md w-1/4">
        <h2 class="mb-2 text-center text-6 font-500 leading-none">Login</h2>
        <div class="flex-1 border-t-1 border-gray-500 mb-4" />
        <form action="#">
          <div class="form-row mb-3 py-1 px-4 border-1 border-gray-500 rounded-md">
            <label class="block text-3" for="email">Email</label>
            <input type="text" id="email" class="w-full bg-transparent font-500" maxlength="50">
          </div>
          <div class="form-row mb-3 py-1 px-4 border-1 border-gray-500 rounded-md">
            <label class="block text-3" for="password">Password</label>
            <input type="password" id="password" class="w-full bg-transparent font-500" maxlength="50">
          </div>
          <button class="w-full py-3 px-4 bg-red-600 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Login</button>
        </form>
        <div class="divider flex items-center my-4">
          <div class="flex-1 border-t-1 border-gray-500" />
          <span class="mx-4">or</span>
          <div class="flex-1 border-t-1 border-gray-500" />
        </div>
        <button class="w-full mb-2 py-3 px-4 bg-blue-700 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Continue with Facebook</button>
        <button class="w-full mb-2 py-3 px-4 bg-red-500 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Continue with Google</button>
        <button class="w-full mb-2 py-3 px-4 bg-blue-500 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Continue with Twitter</button>
        <button class="w-full mb-2 py-3 px-4 bg-pink-600 rounded-md text-white text-4 font-400 outline-none focus:outline-none">Continue with Instagram</button>
        <p>Dont have an account? Register</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtLogin',
  data () {
    return {
      isRegster: false
    }
  }
}
</script>
