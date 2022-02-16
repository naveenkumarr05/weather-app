<template>
  <div class="weather-report">
    <div>
      <h5 v-bind:class="{ pointer: !showPopup }">
        <a href="#popup1" @click="getCityInfo()">{{
          cityWeatherReport.name
        }}</a>
      </h5>
      <h5>{{ cityWeatherReport.sys.country }}</h5>
    </div>
    <div v-if="isCurrentWeatherReport">
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
    <div id="popup1" class="overlay">
      <div class="popup">
        <a class="close" href="#">&times;</a>
        <div class="content">
          City Name: {{ cityInfo.name }}<br />
          Sunrise Time: {{ getTime(cityInfo.sunrise) }}<br>
          Sunset Time: {{ getTime(cityInfo.sunset) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cityInfo: {
        name: "",
        sunrise: "",
        sunset:""
      },
    };
  },
  name: "WeatherReport",
  computed: {
    ...mapGetters("weatherForecast", [
      "isCurrentWeatherReport",
      "cityWeatherReport",
      "sevenDaysWeatherReport",
      "setSevenDaysForecast",
      "showPopup",
    ]),
  },
  methods: {
    dateFormat(dt) {
      let day = new Date(dt * 1000);
      console.log('cityWeatherReport', this.cityWeatherReport);
      return day.toLocaleDateString();
    },
    getTime(time) {
      var s = new Date(time).toLocaleTimeString("en-US");
      return s;
    },
    getCityInfo() {
      this.cityInfo = {
        name: this.cityWeatherReport.name,
        sunrise: this.cityWeatherReport.sys.sunrise,
        sunset: this.cityWeatherReport.sys.sunset,
      };
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
}
.pointer {
  pointer-events: none;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 12px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }
  .popup {
    width: 70%;
  }
}
@media (max-width: 360px) {
  .row {
    display: inline;
  }
}
</style>