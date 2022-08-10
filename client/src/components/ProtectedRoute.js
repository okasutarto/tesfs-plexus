import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
  const isLogin = localStorage.getItem('access_token')

  if (!isLogin) {
    return <Navigate to={'/login'} />
  }

  return props.children
}