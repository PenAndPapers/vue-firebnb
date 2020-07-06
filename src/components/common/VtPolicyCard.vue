<template>
  <div class="policy">
    <h5 class="capitalize text-4 font-500 mb-4">{{ Object.keys(policy)[0].replace(/_/g, ' ') }}</h5>
    <VtWysiwyg :html="policy[Object.keys(policy)[0]]" />
  </div>
</template>

<script>
import VtWysiwyg from '@element/VtWysiwyg'
export default {
  name: 'VtPolicyCard',
  props: {
    policy: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  components: {
    VtWysiwyg
  }
}
</script>
