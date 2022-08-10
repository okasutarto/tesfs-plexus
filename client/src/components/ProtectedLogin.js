import { Navigate } from 'react-router-dom'
import Login from './Login'

export default function ProtectedRoute() {
  const isLogin = localStorage.getItem('access_token')

  if (isLogin) {
    return <Navigate to={'/play'} />
  }

  return <Login />
}