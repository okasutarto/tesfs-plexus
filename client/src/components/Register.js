import { Link } from "react-router-dom"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/actions/actionCreator";

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formRegister, setFormRegister] = useState({
    email: '',
    password: '',
    username: '',
    fullName: '',
    phone: ''
  })

  const registerHandler = () => {
    dispatch(register(formRegister))
      .then((res) => {
        console.log(res);
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <div class="hero min-h-screen mt-10">
      <div class="hero-content flex-col lg:flex-row-reverse w-1/2">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
          <div class="card-body text-slate-500">
            <div class="text-2xl font-bold text-center mb-3">
              <p>REGISTER FORM</p>
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered bg-slate-100"
                value={formRegister.email}
                onChange={(e) => {
                  setFormRegister({
                    ...formRegister,
                    email: e.target.value
                  });
                }} />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Password</span>
              </label>
              <input type="password" placeholder="password" class="input input-bordered bg-slate-100"
                value={formRegister.password}
                onChange={(e) => {
                  setFormRegister({
                    ...formRegister,
                    password: e.target.value
                  });
                }} />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Username</span>
              </label>
              <input type="text" placeholder="username" class="input input-bordered bg-slate-100"
                value={formRegister.username}
                onChange={(e) => {
                  setFormRegister({
                    ...formRegister,
                    username: e.target.value
                  });
                }} />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Full Name</span>
              </label>
              <input type="text" placeholder="full name" class="input input-bordered bg-slate-100"
                value={formRegister.fullName}
                onChange={(e) => {
                  setFormRegister({
                    ...formRegister,
                    fullName: e.target.value
                  });
                }} />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Phone Number</span>
              </label>
              <input type="text" placeholder="08123456789" class="input input-bordered bg-slate-100"
                value={formRegister.phone}
                onChange={(e) => {
                  setFormRegister({
                    ...formRegister,
                    phone: e.target.value
                  });
                }} />
            </div>
            <div class="text-center">
              <Link to="/login" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                Already have an account? Login!
              </Link>
            </div>
            <div class="form-control mt-2">
              <button onClick={registerHandler} class="btn btn-primary text-white bg-gray-700 border-gray-700 hover:bg-gray-700 hover:border-gray-700"
              >Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

