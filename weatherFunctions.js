import { weatherData } from "./weatherApi.js";
import { viewDetails } from "./viewDetails.js";
import { render } from "./render.js";

const searchInput = document.querySelector('.weather__input');
const city = document.querySelectorAll('#city');
const degrees = document.querySelector('.now-content__top');
const icons = document.querySelector('.now-content__img');
let tempData;

function submitWeather(event){
    event.preventDefault();
    render();
    weatherData(searchInput.value)
    .then(data => {
        apply(data);
   })
   .catch(err => alert(err))
   .finally (searchInput.value = '');
}
function apply(data){
    city.forEach(city => {city.textContent = data.name});
    degrees.textContent = Math.round(data.main.temp) + "°";
    icons.removeAttribute("src");
    icons.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png")
    viewDetails(data)
    tempData = data
}

export { submitWeather, tempData, apply }