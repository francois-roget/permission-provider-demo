import {useState} from 'react';
import './App.css';
import {User} from "./Types";
import LoginForm from "./Components/LoginForm";
import ElementList from "./Components/ElementList";
import useElementsStore from "./Services/useElementsStore";

function App() {
    const [currentUser, setCurrentUser] = useState<User | undefined>();
    const [elements, addElement, removeElement] = useElementsStore();

    if (!currentUser) {
        return <LoginForm onLogin={setCurrentUser}/>;
    }

    const logout = () => {
        setCurrentUser(undefined);
    }

    return (
        <div className="App">
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Permission Provider demo</h5>
                {currentUser.firstName} {currentUser.lastName} &nbsp;
                <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
            </div>
            <ElementList elements={elements} addElement={addElement} removeElement={removeElement}/>
        </div>
    );
}

export default App;
