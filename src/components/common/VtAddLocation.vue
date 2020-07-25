<template>
  <div class="add-location">
    <div class="p-3">
      <label class="block text-3 font-500">Location</label>
      <input type="text" class="h-auto w-full p-0 bg-transparent border-0 text-4 font-600" placeholder="Where are you going?">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtAddLocation',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    loadSearchScript () {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://cdn.jsdelivr.net/npm/places.js@1.19.0'
      document.head.appendChild(script)
      setTimeout(() => {
        this.applySearch()
      }, 2000)
    },
    applySearch () {
      // eslint-disable-next-line
      let placesAutocomplete = places({
        appId: 'plL4P6DFU6R9',
        apiKey: '2ee57addef93669cf4a9b3adbb61700d',
        container: document.querySelector('#search-location'),
        templates: {
          value: function (suggestion) {
            return suggestion.name
          }
        }
      })

      placesAutocomplete.on('suggestions', event => {
        console.log(event)
      })
    }
  },
  mounted () {
    // this.loadSearchScript()
  }
}
</script>
