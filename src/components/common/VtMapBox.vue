<template>
  <div
    id="mapbox"
    class="relative bg-black w-full h-120"
  />
</template>

<script>
export default {
  name: 'VtMapBox',
  methods: {
    loadMapBoxScript () {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js'
      document.head.appendChild(script)

      setTimeout(() => {
        this.initializeMap()
      }, 2000)
    },
    initializeMap () {
      // eslint-disable-next-line
      mapboxgl.accessToken = 'pk.eyJ1IjoicGVuYW5kcGFwZXJzIiwiYSI6ImNrYnVvbXBkdjBmYzQyeHJwbWZ6c2UweWsifQ.L7AfX2s96-Yb1DSRQaMZXw'
      // eslint-disable-next-line
      new mapboxgl.Map({
        container: 'mapbox',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        zoom: 13.85, // zoom
        center: [-121.46539, 38.55517] // lat, lon
      })
    }
  },
  mounted () {
    this.loadMapBoxScript()
  }
}
</script>

<style scoped>
@import url('https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css');
</style>
