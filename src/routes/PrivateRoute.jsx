import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('portfolio-admin'));




  // console.log('From Auth Provider', user);
  if (user?.email === "ashikur1603@gmail.com" && user?.password === "12345678") {
    return children;
  }



  return <Navigate to={'/admin-login'}></Navigate>

};

export default PrivateRoute;