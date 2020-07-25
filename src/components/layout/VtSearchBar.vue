<template>
  <section class="search-bar flex items-center justify-center border-1 border-gray-500 rounded-md">
    <VtAddLocation class="flex-1 border-r-1 border-gray-500" />
    <VtAddDate class="w-1/3" />
    <VtAddGuest class="relative w-1/4 border-r-1 border-gray-500 cursor-pointer"/>
    <div class="p-2 flex-none">
      <router-link
        to="/properties"
        class="bg-red-600 hover:bg-red-700 rounded-md flex items-center h-full text-white font-600 px-5 py-3 outline-none focus:outline-none"
      >
        <i class="material-icons text-white mr-2">search</i> Search
      </router-link>
    </div>
  </section>
</template>

<script>
import VtAddLocation from '@common/VtAddLocation'
import VtAddDate from '@common/VtAddDate'
import VtAddGuest from '@common/VtAddGuest'
export default {
  name: 'VtSearchBar',
  components: {
    VtAddLocation,
    VtAddDate,
    VtAddGuest
  }
}
</script>
