import { Link } from "react-router-dom"
import ForgetPassword from "./ForgetPassword";
import { login, fetchDataById } from "../store/actions/actionCreator";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  })

  const loginHandler = () => {

    dispatch(login(formLogin))
      .then((res) => {
        // console.log(res);
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('avatar', res.data.avatar)
      })
      .then((data) => {
        // dispatch(fetchDataById())
        navigate('/play')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="py-6 mt-32">
      <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class="hidden lg:block lg:w-1/2 bg-cover">
          <img class="h-full" src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=pexels-lucie-liz-3165335.jpg&fm=jpg" alt="" />
        </div>
        <div class="w-full p-8 lg:w-1/2">
          <div class="mt-4">
            <label class="block text-gray-500 text-sm font-medium mb-2">Email</label>
            <input type="email"
              class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow"
              value={formLogin.email}
              onChange={(e) => {
                setFormLogin({
                  ...formLogin,
                  email: e.target.value
                });
              }}
            />
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block text-gray-500 text-sm font-medium mb-2">Password</label>
            </div>
            <input
              class=" text-gray-700 focus:outline-none focus:shadow-outline border rounded py-2 px-4 block w-full appearance-none shadow" type="password"
              value={formLogin.password}
              onChange={(e) => {
                setFormLogin({
                  ...formLogin,
                  password: e.target.value
                });
              }} />
          </div>
          <div className="mt-5 text-slate-500 text-sm flex justify-end font-semibold">
            <ForgetPassword />
          </div>
          <div class="form-control mt-4">
            <button onClick={loginHandler} class="btn btn-primary text-white bg-gray-700 border-gray-700 hover:bg-gray-700 hover:border-gray-700"
            >Sign In</button>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 md:w-1/4"></span>
            <Link to='/register' class="text-xs text-gray-500 uppercase font-semibold">or sign up</Link>
            <span class="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div >
  )
}