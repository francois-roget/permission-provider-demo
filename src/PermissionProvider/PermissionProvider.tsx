import React from 'react';
import {Permission} from "../Types";
import PermissionContext from "./PermissionContext";

type Props = {
    fetchPermission: (p: Permission) => Promise<boolean>
}

// This provider is intended to be surrounding the whole application.
// It should receive the users permissions as parameter
const PermissionProvider: React.FunctionComponent<Props> = ({fetchPermission, children}) => {

    // Creates a method that returns whether the requested permission is available in the list of permissions
    // passed as parameter
    const isAllowedTo = async (permission: Permission): Promise<boolean> => await fetchPermission(permission);

    // This component will render its children wrapped around a PermissionContext's provider whose
    // value is set to the method defined above
    return <PermissionContext.Provider value={{isAllowedTo}}>{children}</PermissionContext.Provider>;
};

export default PermissionProvider;
