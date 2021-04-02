import {User} from "../../Types";

type Props = {
    onLogin: (user: User) => void;
}

const noRights: User = {
    firstName: 'No Rights',
    lastName: 'User',
    permissions: [],
}

const viewer: User = {
    firstName: 'Viewer',
    lastName: 'User',
    permissions: ['list.elements'],
}

const contributor: User = {
    firstName: 'Contributor',
    lastName: 'User',
    permissions: ['list.elements', 'add.element'],
}

const administrator: User = {
    firstName: 'Administrator',
    lastName: 'User',
    permissions: ['list.elements', 'add.element', 'delete.element'],
}

const LoginForm: React.FunctionComponent<Props> = ({onLogin}: Props) => (
    <div className="container">
        <div className="card-deck mb-3 text-center">
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Viewer</h4>
                </div>
                <div className="card-body">
                    You will have no permission
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                            onClick={() => onLogin(noRights)}>
                        Login without permissions
                    </button>
                </div>
            </div>
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Viewer</h4>
                </div>
                <div className="card-body">
                    You will be able to
                    <li>list elements</li>
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                            onClick={() => onLogin(viewer)}>
                        Login as Viewer
                    </button>
                </div>
            </div>
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Contributor</h4>
                </div>
                <div className="card-body">
                    You will be able to
                    <ul>
                        <li> List elements</li>
                        <li> Add elements</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                            onClick={() => onLogin(contributor)}>
                        Login as Contributor
                    </button>
                </div>
            </div>
            <div className="card mb-3 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Administator</h4>
                </div>
                <div className="card-body">
                    You will be able to
                    <ul>
                        <li> List elements</li>
                        <li> Add elements</li>
                        <li> Remove elements</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary"
                            onClick={() => onLogin(administrator)}>
                        Login as Administrator
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default LoginForm;
