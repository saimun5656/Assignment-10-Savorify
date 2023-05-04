import React, { useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const location=useLocation()
    console.log(location);
    const {user,loading}=useContext(AuthContext);
     if(loading){
        return <div className=' text-center'><button className="btn loading bg-red-300">loading</button></div>
     }
     if(user){
       return  children
     }
    return <Navigate to='/login' state={{from:location.pathname}}></Navigate>

};

export default Privateroute;