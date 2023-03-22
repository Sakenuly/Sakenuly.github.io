 import { list, flag, addCity, deleteCity, findSavedCity } from "./mass.js";
 import { BUTTONS, showScreen } from "./tabs.js";
 import { apply, submitWeather, tempData } from "./weatherFunctions.js";;
 import { weatherData } from "./weatherApi.js";
 import { render } from "./render.js";
 import { savedCity } from "./savedCity.js";

if (JSON.parse(localStorage.getItem(2)) !== null) {savedCity()}
render()
 const submitButton = document.querySelector('.weather__button');
 const favoriteButton = document.querySelector('.bottom-now-content__favorite')
 const ulList = document.querySelector('.right-content__list')

//eventListeners
ulList.addEventListener("click", function(event){
if (event.target.className === "button-delete") {
deleteCity(+event.target.id)
render()
}
if (event.target.className ==="list-right-content__item") {
    weatherData(event.target.textContent.slice(0, -1))
    .then(data => apply(data))
    .then(localStorage.setItem(2, JSON.stringify(event.target.textContent.slice(0, -1))))
     
}
})
 favoriteButton.addEventListener("click", function() {
    findSavedCity(list)
    if (flag === true){
        return;
    }
    addCity(tempData.name)
    render()
})
 BUTTONS.addEventListener("click", showScreen);
 submitButton.addEventListener("click", submitWeather)