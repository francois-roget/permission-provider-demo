import React, {useState} from 'react';
import {ElementType} from "../../Types";


type Props = {
    getElements: () => ElementType[];
    addElement: (e: ElementType) => void;
    removeElement: (e: ElementType) => void;
}
const ElementList: React.FunctionComponent<Props> = ({getElements, addElement, removeElement}) => {
    const [elements, setElements] = useState(getElements());

    const addRandomElement = () => {
        const random = Math.floor(Math.random() * Math.floor(200));
        addElement({name: `test-${random}`, price: random, currency: random % 2 === 0 ? "EUR" : "USD"});
        setElements(getElements());
    }

    const deleteElement = (e: ElementType) =>{
        removeElement(e);
        setElements(getElements());
    }

    return (
        <div className="container">
            <table className="table table-sm table-hover">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Currency</th>
                    <th scope="col" className="text-right">
                        <button className="btn btn-primary" onClick={addRandomElement}>Add</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {elements.map(e => (
                    <tr key={e.name}>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>{e.currency}</td>
                        <td className="text-right">
                            <button className="btn btn-danger" onClick={() => deleteElement(e)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ElementList;
