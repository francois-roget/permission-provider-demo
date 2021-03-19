import React, {useContext} from 'react';
import PermissionContext from "./PermissionContext";
import {Permission} from "../Types";

type Props = {
    to: Permission;
};

// This component is meant to be used everywhere a restriction based on user permission is needed
const Restricted: React.FunctionComponent<Props> = ({to, children}) => {

    // We "connect" to the provider thanks to the PermissionContext
    const {isAllowedTo} = useContext(PermissionContext);

    // If the user has that permission, render the children
    if(isAllowedTo(to)){
        return <>{children}</>;
    }

    // Otherwise, do not render anything
    return null;
};

export default Restricted;
