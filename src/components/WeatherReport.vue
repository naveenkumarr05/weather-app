<template>
  <div class="weather-report">
    <div>
      <h5>{{ cityWeatherReport.name }}</h5>
      <h5>{{ cityWeatherReport.sys.country }}</h5>
    </div>
    <div v-if="currentWeatherReport">
      <img
        :src="`https://openweathermap.org/img/wn/${cityWeatherReport.weather[0].icon}@2x.png`"
        width="70"
        loading="lazy"
      />
      <h5>{{ cityWeatherReport.main.temp }}°c</h5>
      <h5>{{ cityWeatherReport.weather[0].description }}</h5>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "WeatherReport",
  computed: {
    ...mapGetters("weatherForecast", [
      "currentWeatherReport",
      "cityWeatherReport",
    ]),
  },
};
</script>

<style>
.weather-report {
  margin-top: 2rem !important;
}
</style>