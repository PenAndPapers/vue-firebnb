<template>
  <section class="search-bar flex items-center justify-center border-1 border-gray-500 rounded-md">
    <div class="location flex-1 p-3 border-r-1 border-gray-500">
      <div>
        <label class="block text-3 font-500">Location</label>
        <input type="text" class="text-4 font-600 w-full" placeholder="Where are you going?">
      </div>
    </div>
    <div class="check-in w-1/6 p-3 border-r-1 border-gray-500">
      <div>
        <label class="block text-3 font-500">Check in</label>
        <input type="text" class="text-4 font-600 w-full" placeholder="Add date">
      </div>
    </div>
    <div class="check-out w-1/6 p-3 border-r-1 border-gray-500">
      <div>
        <label class="block text-3 font-500">Check out</label>
        <input type="text" class="text-4 font-600 w-full" placeholder="Add date">
      </div>
    </div>
    <div class="guest w-1/4 p-3 border-r-1 border-gray-500">
      <div>
        <label class="block text-3 font-500">Guests</label>
        <input type="text" class="text-4 font-600 w-full" placeholder="Add guests">
      </div>
    </div>
    <div class="p-2 flex-none">
      <router-link to="/properties" class="bg-red-600 hover:bg-red-500 rounded-md flex items-center h-full text-white font-600 px-5 py-3 outline-none focus:outline-none">
        <i class="material-icons text-white mr-2">search</i> Search
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VtSearchBar'
}
</script>
