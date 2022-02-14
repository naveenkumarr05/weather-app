import axios from 'axios';

const API_KEY = '6a92a8ee550157bb541a33e1ab49a32e';


export default {
    getWeatherInfoByCity: (city) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(error => {
                    alert('No City Found');
                    reject(error);
                })
        })
    },
    getCurrentWeatherReport: () => {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${API_KEY}`)
                .then(result => {
                    console.log('RESULT', result);
                    resolve(result.data);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
}