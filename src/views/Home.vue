<template>
  <div class="home">
    <img class="block m-auto" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <VtCommon />
    <VtElement />
    <VtLayout />
    <VtModule />
    <VtSkeleton />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VtCommon from '@common/VtCommon'
import VtElement from '@element/VtElement'
import VtLayout from '@layout/VtLayout'
import VtModule from '@module/VtModule'
import VtSkeleton from '@skeleton/VtSkeleton'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    VtCommon,
    VtElement,
    VtLayout,
    VtModule,
    VtSkeleton
  }
}
</script>
