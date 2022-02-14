import weatherService from '../../service/weatherService';

let InitialState = {
    cityWeatherReport: ''
}

export default {
    namespaced: true,
    state: Object.assign(InitialState),
    getters: {
        cityWeatherReport:state => {
            return state.cityWeatherReport;
        }
    },
    mutations: {
        SET_CITY_WEATHER_REPORT: (state, data) => {
            state.cityWeatherReport = data;
        }
    },
    actions: {
        getWeatherInfo: ({ commit }, city) => {
            return new Promise((resolve, reject) => {
                weatherService.getWeatherInfo(city).then(async (data) => {
                    if (data) {
                        commit('SET_CITY_WEATHER_REPORT', data);
                        resolve(data);
                    } else {
                        reject("Bad request");
                    }
                })
            })
        }
    }
}