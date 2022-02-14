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
      />
      <h5>{{ cityWeatherReport.main.temp }}°c</h5>
      <h5>{{ cityWeatherReport.weather[0].description }}</h5>
    </div>
    <div class="row" v-if="setSevenDaysForecast">
      <div
        v-for="daily in sevenDaysWeatherReport.daily"
        :key="daily.dt"
        class="column"
      >
        <img
          :src="`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`"
          width="70"
          loading="lazy"
        />
        <p>Avg Temp: {{ daily.temp.min }}°c</p>
        <p>{{ daily.weather[0].description }}</p>
        <p>{{ dateFormat(daily.dt) }}</p>
      </div>
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
      "sevenDaysWeatherReport",
      "setSevenDaysForecast",
    ]),
  },
  methods: {
    dateFormat(dt) {
      let day = new Date(dt * 1000);
      return day.toLocaleDateString();
    },
  },
};
</script>

<style>
.weather-report {
  margin-top: 2rem !important;
}
.column {
  flex: 33.33%;
  padding: 5px;
}
.row {
  display: flex;
  margin-left: 15rem;
  margin-right: 15rem;
}
</style>