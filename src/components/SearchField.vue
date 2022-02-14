<template>
  <div>
    <form @submit="getCityWeatherReport($event)">
      <div>
        <input
          placeholder="Search Location"
          type="search"
          v-model="searchCity"
        />
        <button class="search-btn" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SearchField",
  data() {
    return {
      searchCity: "",
    };
  },
  computed: {
      ...mapGetters("weatherForecast",["cityWeatherReport"])
  },
  methods: {
    ...mapActions({
      getWeatherInfo: "weatherForecast/getWeatherInfo",
    }),
    async getCityWeatherReport(event) {
      event.preventDefault();
      const cityValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(this.searchCity);
      if (!cityValid) {
        alert("Entered city invalid");
      }
      let data = await this.getWeatherInfo(this.searchCity);
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