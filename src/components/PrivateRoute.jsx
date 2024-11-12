import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const {user, loding} = useContext(AuthContext);

    if(loding){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user) {
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;