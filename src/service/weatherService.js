import axios from 'axios';

const API_KEY = '6a92a8ee550157bb541a33e1ab49a32e';


export default {
    getWeatherInfoByCity: (city) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(error => {
                    alert('No City Found');
                    reject(error);
                })
        })
    },
    getSevenDaysForecast: (coordinates) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
}