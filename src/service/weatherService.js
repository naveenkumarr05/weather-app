import axios from 'axios';

const API_KEY = '6a92a8ee550157bb541a33e1ab49a32e';


export default {
    getWeatherInfo: (city) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
}