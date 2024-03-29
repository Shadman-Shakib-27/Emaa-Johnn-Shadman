import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();

  if(!user){
   return <Navigate to='/Login' state={{from:location}} replace></Navigate>
  }
  return (
    <div>
      <h1>This is Private Route</h1>
    </div>
  );
};

export default RequireAuth;
