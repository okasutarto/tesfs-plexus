import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Leaderboard from './components/Leaderboard';
import TabMenus from './components/TabMenus';
import Play from './components/Play';
import UpdateProfile from './components/UpdateProfile';
import ChangePassword from './components/ChangePassword';
import Shop from './components/Shop';
import Inventory from './components/Inventory';
import { Route, Routes, useLocation } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedLogin from './components/ProtectedLogin';
import ProtectedRegister from './components/ProtectedRegister';
import ClientPage from './components/ClientPage';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isLogin = localStorage.getItem('access_token');
    // console.log(isLogin, 'isLogin');
    if (isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [location])

  return (
    <>
      {isLogin ? <Navbar /> : null}
      {isLogin && <TabMenus />}
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <ClientPage />
        </ProtectedRoute >
        } >
          <Route index={true} element={<Play />} />
          <Route path='/play' element={<Play />} />

          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>
        <Route path="/login" element={
          <ProtectedLogin>
            <Login />
          </ProtectedLogin>
        } />
        <Route path="/register" element={
          <ProtectedRegister>
            <Register />
          </ProtectedRegister>
        } />
      </Routes >
    </>
  );
}

export default App;
