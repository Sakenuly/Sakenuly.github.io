import { weatherData } from "./weatherApi.js";
import { apply } from "./weatherFunctions.js";
import { weatherForecast } from "./weatherApi.js";
import { forecastApply } from "./weatherFunctions.js";
function savedCity(){
    const lastSaved = JSON.parse(localStorage.getItem(2));
    weatherData(lastSaved)
    .then(data => {
        apply(data);
        
        weatherForecast(lastSaved)
        .then(data => forecastApply(data))
   })
 }
 export { savedCity }