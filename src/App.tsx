import {useState} from 'react';
import './App.css';
import {Permission, User} from "./Types";
import LoginForm from "./Components/LoginForm";
import ElementList from "./Components/ElementList";
import {removeElement, addElement, getElements} from "./Services/ElementsStore";
import PermissionProvider from "./PermissionProvider/PermissionProvider";
import Restricted from "./PermissionProvider/Restricted";

// Function that simulates fetching a permission from remote server
const fetchPermission = (user: User) => async (permission: Permission): Promise<boolean> =>{
    // Simulate a delay from a request
    await new Promise(resolve => setTimeout(resolve, 1000));
    return user.permissions.includes(permission);
}

function App() {
    const [currentUser, setCurrentUser] = useState<User | undefined>();

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
        <PermissionProvider fetchPermission={fetchPermission(currentUser)}>
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Permission Provider demo</h5>
                {currentUser.firstName} {currentUser.lastName} &nbsp;
                <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
            </div>
            <Restricted to="list.elements" fallback={notAllowed}>
                <ElementList getElements={getElements} addElement={addElement} removeElement={removeElement}/>
            </Restricted>
        </PermissionProvider>
    );
}

export default App;
