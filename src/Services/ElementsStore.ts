import {ElementType} from "../Types";

let storedElements: ElementType[] = [{
    name: 'item 1',
    price: 1,
    currency: "EUR"
}, {
    name: 'item 2',
    price: 2,
    currency: "USD"
},];

export const addElement = (element: ElementType) => {
    storedElements = [...storedElements, element];
}

export const removeElement = (element: ElementType) => {
    storedElements = storedElements.filter(e => e.name !== element.name);
}

export const getElements = () => storedElements;

