import React, {useContext} from 'react';
import PermissionContext from "./PermissionContext";
import {Permission} from "../Types";

type Props = {
    to: Permission;
    fallback?: JSX.Element | string;
};

// This component is meant to be used everywhere a restriction based on user permission is needed
const Restricted: React.FunctionComponent<Props> = ({to, fallback, children}) => {

    // We "connect" to the provider thanks to the PermissionContext
    const {isAllowedTo} = useContext(PermissionContext);

    // If the user has that permission, render the children
    if(isAllowedTo(to)){
        return <>{children}</>;
    }

    // Otherwise, do not render anything
    return <>{fallback}</>;
};

export default Restricted;
