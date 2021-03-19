import {ElementType} from "../Types";
import {useState} from "react";

const initialElements: ElementType[] = [{
    name: 'item 1',
    price: 1,
    currency: "EUR"
}, {
    name: 'item 2',
    price: 2,
    currency: "USD"
},];

const useElementsStore = (): [ElementType[], (element: ElementType) => void, (element: ElementType) => void] => {
    const [elements, setElements] = useState<ElementType[]>(initialElements);

    const addElement = (element: ElementType) => {
        setElements([...elements, element]);
    }

    const removeElement = (element: ElementType) => {
        setElements(elements.filter(e => e.name !== element.name));
    }

    return [elements, addElement, removeElement];
};

export default useElementsStore;
