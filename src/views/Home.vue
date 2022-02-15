<template>
  <div>
    <h2>Weather Forecast</h2>
    <SearchField/>
  </div>
</template>

<script>
import SearchField from '@/components/SearchField.vue'

export default {
  name: 'home',
  components: {
    SearchField,
  },
}
</script>
<style>
body {
  background: #fff;
  margin: 20px;
}
</style>
