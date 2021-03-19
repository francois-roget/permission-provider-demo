import React from 'react';
import {ElementType} from "../../Types";


type Props = {
    elements: ElementType[];
    addElement: (e: ElementType) => void;
    removeElement: (e: ElementType) => void;
}
const ElementList: React.FunctionComponent<Props> = ({elements, addElement, removeElement}) => {

    const addRandomElement = () => {
        const random = Math.floor(Math.random() * Math.floor(200));
        addElement({name: `test-${random}`, price: random, currency: random % 2 === 0 ? "EUR" : "USD"});
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
                            <button className="btn btn-danger" onClick={() => removeElement(e)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ElementList;
