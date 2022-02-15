import weatherService from '../../service/weatherService';

let InitialState = {
    cityWeatherReport: '',
    currentWeatherReport: null,
    sevenDaysWeatherReport: '',
    setSevenDaysForecast: '',
    showPopup: false
}

export default {
    namespaced: true,
    state: Object.assign(InitialState),
    getters: {
        cityWeatherReport: state => {
            return state.cityWeatherReport;
        },
        currentWeatherReport: (state) => {
            return state.currentWeatherReport;
        },
        sevenDaysWeatherReport: (state) => {
            return state.sevenDaysWeatherReport;
        },
        setSevenDaysForecast: (state) => {
            return state.setSevenDaysForecast;
        },
        showPopup:(state) => {
            return state.showPopup;
        }
    },
    mutations: {
        SET_CITY_WEATHER_REPORT: (state, data) => {
            state.cityWeatherReport = data;
        },
        SET_CURRENT_WEATHER_REPORT: (state, payload) => {
            state.currentWeatherReport = payload;
        },
        SET_SEVEN_DAYS_FORECAST: (state, data) => {
            state.sevenDaysWeatherReport = data;
        },
        SET_SEVEN_DAYS_FORECAST_REPORT: (state, payload) => {
            state.setSevenDaysForecast = payload;
        },
        SET_SHOW_POPUP: (state, payload) => {
            state.showPopup = payload;
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
        getSevenDaysForecast: ({ commit }, data) => {
            return new Promise((resolve, reject) => {
                weatherService.getSevenDaysForecast(data).then(async (data) => {
                    if (data) {
                        commit('SET_SEVEN_DAYS_FORECAST', data);
                        resolve(data);
                    } else {
                        reject("Bad request");
                    }
                })
            })
        },
    }
}