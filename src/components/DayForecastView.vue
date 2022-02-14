<template>
  <div class="main">
    <button class="btn" @click="getCurrentWeather(true)">CURRENT</button>
    <button class="btn" @click="getSevenDaysForecast()">7 DAY FORECAST</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DayForecastView",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("weatherForecast", ["currentWeatherReport"]),
  },
  methods: {
    ...mapActions({
      getCurrentWeatherReport: "weatherForecast/getCurrentWeatherReport",
    }),
    getCurrentWeather(payload) {
      this.$store.commit("weatherForecast/SET_CURRENT_WEATHER_REPORT", payload);
    },
    getSevenDaysForecast() {
      
    }
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