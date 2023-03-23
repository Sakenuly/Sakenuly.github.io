
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'e315b9c550272c3cd9081c780227d1dd';
const forecastServerUrl = 'http://api.openweathermap.org/data/2.5/forecast'  
function weatherData(city) {
const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
 return fetch(url)
.then(response => response.json())
.then(response => {
    if (!(response.cod >= 200 && response.cod < 299)){ 
        throw `Ошибка: ${response.cod} ${response.message}`;
      }
      else {
        return response;
      }
})
}


function weatherForecast(city) {
const url = `${forecastServerUrl}?q=${city}&appid=${apiKey}&units=metric`;
return fetch(url)
.then(response => response.json())
.then(response => {
  if (!(response.cod >= 200 && response.cod < 299)){ 
      throw `Ошибка: ${response.cod} ${response.message}`;
    }
    else {
      return response;
    }
})
// .then(data => console.log(data))
}

export { weatherData, weatherForecast }
