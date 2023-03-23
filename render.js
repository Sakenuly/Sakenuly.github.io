import { createElement } from "./createHTML.js";
import { changeFavoriteIcon } from "./weatherFunctions.js";


const addedList = document.querySelector('.right-content__list');
function render(){
    
    document.querySelector('.right-content__list').textContent = ''
    const getLocalStorage = JSON.parse(localStorage.getItem(1)) || [];
    for (let i of getLocalStorage) {
        const newLi = addedList.appendChild(createElement({tag:"li", text:i.name, classList:'list-right-content__item'}));
        newLi.appendChild(createElement({tag:"button", text:"X", id: i.id,  classList:"button-delete"}))
    }

    }
    
    export { render }