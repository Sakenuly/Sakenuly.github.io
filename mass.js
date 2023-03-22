import { tempData } from "./weatherFunctions.js";
export let flag = false; 
const list = JSON.parse(localStorage.getItem(1))||[];
let countof = list.length
 function addCity(city) {
    list.push({id: tempData.id, name: city});
    localStorage.setItem(1, JSON.stringify(list))
 }
function deleteCity(id) {
    const findForDelete = list.findIndex(obj => obj.id === id);
    const deleteIndex = list.splice(findForDelete, 1);
    localStorage.setItem(1, JSON.stringify(list))
    console.log('Вы удалили задачу');
    console.log(deleteIndex, '\n');
 }  
 function findSavedCity(){
   flag = false;
   const find = list.find(obj => obj.id === tempData.id);
   if (find){
      alert('Уже существует');
      return flag = true;
   }
 }
 export {list, countof, addCity, deleteCity, findSavedCity}