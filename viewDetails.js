import { stampToTime } from "./timeStampConvert.js";
import { createElement } from "./createHTML.js";
function viewDetails(data){
    let detailsMass = [
    {name: 'Temperature: ', stat: data.main.temp + "°"},
    {name: 'Feels like: ', stat: data.main.feels_like + "°"},
    {name: 'Weather: ', stat: data.weather[0].main},
    {name: 'Sunrise: ', stat: stampToTime(data.sys.sunrise)},
    {name: 'Sunset: ', stat: stampToTime(data.sys.sunset)},
    ]
      const detailsList = document.querySelector('.details__list');
      document.querySelectorAll('.details__item').forEach(elem => elem.remove());
    for (let el of detailsMass){
        detailsList.appendChild(createElement({tag:"li", text: el.name + el.stat, classList:'details__item'}))
    }
}
export {viewDetails}