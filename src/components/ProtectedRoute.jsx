import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
// Untuk simulasi, kita buat state palsu untuk login
// Di aplikasi nyata, ini bisa datang dari Context, Redux, atau localStorage
const useAuth = () =>{
  const user = {loggedIn:false}
  return user && user.loggedIn
}

const ProtectedRoute = () => {
  const isAuth = useAuth()

  if(isAuth){
    return <Navigate to="login" replace/>
  }
  
  return <Navigate to="/login" replace />;

}

export default ProtectedRoute
