<template>
  <div>
    <form @submit="getCityWeatherReport($event)">
      <div>
        <input
          placeholder="Search Location"
          type="search"
          v-model="searchCity"
          @input="validateField()"
        />
        <button class="search-btn" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </form>
    <DayForecastView />
    <div v-if="weatherReport">
      <WeatherReport />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DayForecastView from "./DayForecastView.vue";
import WeatherReport from "./WeatherReport.vue";
export default {
  name: "SearchField",
  components: {
    DayForecastView,
    WeatherReport,
  },
  data() {
    return {
      searchCity: "",
      weatherReport: false,
    };
  },
  computed: {
    ...mapGetters("weatherForecast", ["cityWeatherReport"]),
  },
  methods: {
    ...mapActions({
      getWeatherInfoByCity: "weatherForecast/getWeatherInfoByCity",
    }),
    async getCityWeatherReport(event) {
      event.preventDefault();
      const cityValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(this.searchCity);
      if (!cityValid) {
        alert("Enter valid city name");
      }
      let data = await this.getWeatherInfoByCity(this.searchCity);
      if (data && data.cod == "200") {
        this.weatherReport = true;
      } else {
        this.weatherReport = false;
      }
    },
    validateField() {
      this.weatherReport = false;
      this.$store.commit("weatherForecast/SET_CURRENT_WEATHER_REPORT", false);
      this.$store.commit(
        "weatherForecast/SET_SEVEN_DAYS_FORECAST_REPORT", false);
    },
  },
};
</script>

<style>
input {
  width: 50%;
  background: #fff;
  color: #525865;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
  font-family: inherit;
  font-size: 1em;
  line-height: 1.45;
  outline: none;
  padding: 0.6em 1.45em 0.7em;
}
input:hover {
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
}
input:focus {
  color: #4b515d;
  border: 1px solid #b8b6b6;
  box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01),
    0px 0px 8px rgba(0, 0, 0, 0.2);
}
body {
  background: #fff;
  margin: 20px;
}
.search-btn {
  margin-left: -2.5rem;
  border: none;
  background: none;
  padding: 12px 12px;
}
</style>