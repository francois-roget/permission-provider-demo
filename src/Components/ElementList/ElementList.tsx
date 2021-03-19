import React from 'react';
import {ElementType} from "../../Types";
import Restricted from "../../PermissionProvider/Restricted";


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
                        <Restricted to='add.element'>
                            <button className="btn btn-primary btn-sm" onClick={addRandomElement}>
                                <i className="bi-plus-circle"/>
                            </button>
                        </Restricted>
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
                            <Restricted to='delete.element'>
                                <button className="btn btn-danger btn-sm" onClick={() => removeElement(e)}>
                                    <i className="bi bi-trash"/>
                                </button>
                            </Restricted>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ElementList;
