<template>
  <div class="main">
    <button class="btn" @click="getCurrentWeather()">CURRENT</button>
    <button class="btn" @click="getSevenDaysForecastReport()">
      7 DAYS FORECAST
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DayForecastView",
  computed: {
    ...mapGetters("weatherForecast", ["cityWeatherReport"]),
  },
  methods: {
    ...mapActions({
      getSevenDaysForecast: "weatherForecast/getSevenDaysForecast",
    }),
    getCurrentWeather() {
      if(this.cityWeatherReport == '') {
        alert('Please Enter city to search')
        return;
      }
      this.$store.commit("weatherForecast/SET_SHOW_POPUP", true);
      this.$store.commit("weatherForecast/SET_CURRENT_WEATHER_REPORT", true);
      this.$store.commit(
        "weatherForecast/SET_SEVEN_DAYS_FORECAST_REPORT",
        false
      );
    },
    getSevenDaysForecastReport() {
      if(this.cityWeatherReport == '') {
        alert('Please Enter city to search')
        return;
      }
      this.$store.commit("weatherForecast/SET_CURRENT_WEATHER_REPORT", false);
      this.$store.commit("weatherForecast/SET_SHOW_POPUP", false);
      this.$store.commit(
        "weatherForecast/SET_SEVEN_DAYS_FORECAST_REPORT",
        true
      );
      let coordinates = {
        lat: this.cityWeatherReport.coord.lat,
        lon: this.cityWeatherReport.coord.lon,
      };
      this.getSevenDaysForecast(coordinates);
    },
  },
};
</script>

<style>
.main {
  margin-top: 1rem;
}
.btn {
  background-color: white;
  border: none;
  color: #525865;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.btn:hover {
  background-color: gray;
  color: black;
  border-bottom: 3px solid blue;
}
</style>