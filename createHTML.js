let createElement= (obj)=> {
    let element = document.createElement(obj.tag);
    element.textContent = obj.text
    for (let property in obj) {
        if (property === "childNodes") {
            obj.childNodes.forEach(function (node) { element.appendChild(node); });
        }
        else if (property === "attributes") {
            obj.attributes.forEach(function (attr) { element.setAttribute(attr.key, attr.value) });
        }
        else element[property] = obj[property];
    }
    return element;
}
export{createElement}