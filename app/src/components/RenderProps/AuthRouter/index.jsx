import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../../utils/utils';


const AuthRouter = ({ element: WrappedComponent }) => {

  return (
    getToken()
      ? <WrappedComponent />
      : <Navigate replace to="/login" />
  );
}

export default AuthRouter;
