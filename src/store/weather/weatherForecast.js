import weatherService from '../../service/weatherService';

let InitialState = {
    cityWeatherReport: '',
    currentWeatherReport: null
}

export default {
    namespaced: true,
    state: Object.assign(InitialState),
    getters: {
        cityWeatherReport:state => {
            return state.cityWeatherReport;
        },
        currentWeatherReport:(state) => {
            return state.currentWeatherReport;
        }
    },
    mutations: {
        SET_CITY_WEATHER_REPORT: (state, data) => {
            state.cityWeatherReport = data;
        },
        SET_CURRENT_WEATHER_REPORT:(state, payload) => {
            state.currentWeatherReport = payload;
        }
    },
    actions: {
        getWeatherInfoByCity: ({ commit }, city) => {
            return new Promise((resolve, reject) => {
                weatherService.getWeatherInfoByCity(city).then(async (data) => {
                    if (data && data.cod == '200') {
                        commit('SET_CITY_WEATHER_REPORT', data);
                        resolve(data);
                    } else {
                        reject("Bad request");
                    }
                })
            })
        },
    }
}