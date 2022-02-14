import Vue from 'vue';
import Vuex from 'vuex';
import weatherForecast from './weather/weatherForecast';


Vue.use(Vuex);

const store =  new Vuex.Store({
    modules: {
        weatherForecast: weatherForecast
    }
});
export default store;