import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext)
    const location = useLocation();
    if(loader){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }

    return <Navigate to={"/auth/login"}></Navigate>
};

export default PrivateRoute;