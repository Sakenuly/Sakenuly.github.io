import { weatherData } from "./weatherApi.js";
import { apply } from "./weatherFunctions.js";
function savedCity(){
    const lastSaved = JSON.parse(localStorage.getItem(2));
    weatherData(lastSaved)
    .then(data => {
        apply(data);
        
   })
 }
 export { savedCity }