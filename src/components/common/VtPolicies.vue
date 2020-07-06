<template>
  <div class="policies">
    <h2 class="text-8 font-400 mb-8">Things to know</h2>
    <div class="grid grid-cols-12 gap-12">
      <VtPolicyCard
        class="col-span-4"
        v-for="(policy, index) in policies"
        :key="index"
        :policy="policy"
      />
    </div>
  </div>
</template>

<script>
import VtPolicyCard from '@common/VtPolicyCard'
export default {
  name: 'VtPolicies',
  props: {
    policies: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    VtPolicyCard
  }
}
</script>
