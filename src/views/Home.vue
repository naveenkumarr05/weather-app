<template>
  <div>
    <SearchField/>
    <DayForecastView/>
    <WeatherReport/>
  </div>
</template>

<script>
import WeatherReport from '@/components/WeatherReport.vue'
import SearchField from '@/components/SearchField.vue'
import DayForecastView from '@/components/DayForecastView.vue'

export default {
  name: 'home',
  components: {
    WeatherReport,
    SearchField,
    DayForecastView
  },
}
</script>
<style>
body {
  background: #fff;
  margin: 20px;
}
</style>
