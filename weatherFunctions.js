import { weatherData } from "./weatherApi.js";
import { viewDetails } from "./viewDetails.js";
import { render } from "./render.js";
import { list } from "./mass.js";
import { stampToTime, stampToDate } from "./timeStampConvert.js"
import { weatherForecast } from "./weatherApi.js";
 


const favoriteText = document.querySelector('.bottom-now-content__city')
const favoriteButton = document.querySelector('.bottom-now-content__favorite')      
const searchInput = document.querySelector('.weather__input');
const city = document.querySelectorAll('#city');
const degrees = document.querySelector('.now-content__top');
const icons = document.querySelector('.now-content__img');
let tempData;
function popupError(err){
const popupText = document.querySelector('.error-content');
const popup = document.querySelector('.b-popup');
popupText.textContent = err;
popup.style.display = "block"

}
function submitWeather(event){
    event.preventDefault();
    render();
    weatherData(searchInput.value)
    .then(data => {{
        return apply(data);
    }
   })
   .catch(err => popupError(err))

   weatherForecast(searchInput.value)
   .then(data => forecastApply(data))
   .catch(err => popupError(err))
   .finally (searchInput.value = '');
   
}
function apply(data){
    city.forEach(city => {city.textContent = data.name});
    degrees.textContent = Math.round(data.main.temp) + "°";
    icons.removeAttribute("src");
    icons.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png");
    viewDetails(data);
    tempData = data;
    changeFavoriteIcon();
}
 
function forecastApply(data){
    const forecastContainer = document.querySelector('.forecast__list');
    forecastContainer.textContent = ""
for (let i = 0; i < 39; i++) {
 const newItem = document.createElement('li');
 newItem.classList.add('forecast__item', 'item-forecast');
 
 const newTopDiv = document.createElement('div');
 newTopDiv.classList.add('item-forecast__top');

 const dateDiv = document.createElement('div');

 dateDiv.textContent = stampToDate(data.list[i].dt)

 const timeDiv = document.createElement('div');

 timeDiv.textContent = stampToTime(data.list[i].dt)

 newItem.appendChild(newTopDiv);
 newTopDiv.appendChild(dateDiv);
 newTopDiv.appendChild(timeDiv);

 const infoDiv = document.createElement('div');
 infoDiv.classList.add('item-forecast__info');
 
 const infoLeftDiv = document.createElement('div');
 infoLeftDiv.classList.add('item-forecast__left');

 const tempDiv = document.createElement('div');
 tempDiv.textContent = 'Temperature: ' + Math.round(data.list[i].main.temp) + "°";
 
 const feelsDiv = document.createElement('div');
 feelsDiv.textContent = 'Feels like: ' + Math.round(data.list[i].main.feels_like) + "°";

 const infoRightDiv = document.createElement('div');
 infoRightDiv.classList.add('item-forecast__right');
 const weatherDiv = document.createElement('div');
 weatherDiv.textContent = data.list[i].weather[0].main;
 const iconImg = document.createElement('img');
 iconImg.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png");
 iconImg.classList.add('item-forecast__icon');

 newItem.appendChild(infoDiv)
 infoDiv.appendChild(infoLeftDiv)
 infoDiv.appendChild(infoRightDiv)
 infoLeftDiv.appendChild(tempDiv)
 infoLeftDiv.appendChild(feelsDiv)
 infoRightDiv.appendChild(weatherDiv)
 infoRightDiv.appendChild(iconImg)


 forecastContainer.appendChild(newItem);
}
}
 
function changeFavoriteIcon(){
    if (list.find(el => el.name === tempData.name )){
     favoriteButton.classList.add('_active-favorite');
    } else {
        favoriteButton.classList.remove('_active-favorite');
        console.log('oo');
    }
    }
    

export { submitWeather, tempData, apply, changeFavoriteIcon, forecastApply, popupError }