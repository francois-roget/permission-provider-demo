import {useState} from 'react';
import './App.css';
import {User} from "./Types";
import LoginForm from "./Components/LoginForm";
import ElementList from "./Components/ElementList";
import useElementsStore from "./Services/useElementsStore";
import PermissionProvider from "./PermissionProvider/PermissionProvider";
import Restricted from "./PermissionProvider/Restricted";

function App() {
    const [currentUser, setCurrentUser] = useState<User | undefined>();
    const [elements, addElement, removeElement] = useElementsStore();

    if (!currentUser) {
        return <LoginForm onLogin={setCurrentUser}/>;
    }

    const logout = () => {
        setCurrentUser(undefined);
    }
    const notAllowed = (<div className="container">
        <div className="row">
            <div className="col">
                <h4>Not Allowed </h4>
                You are not allowed to access this feature, please contact your administrator
            </div>
        </div>
    </div>);

    return (
        <PermissionProvider permissions={currentUser.permissions}>
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Permission Provider demo</h5>
                {currentUser.firstName} {currentUser.lastName} &nbsp;
                <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
            </div>
            <Restricted to="list.elements" fallback={notAllowed}>
                <ElementList elements={elements} addElement={addElement} removeElement={removeElement}/>
            </Restricted>
        </PermissionProvider>
    );
}

export default App;
