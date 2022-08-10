import { useNavigate, Link, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchDataById } from "../store/actions/actionCreator"

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const data = useSelector(state => {
    // console.log(state.dataById, '<<< state.data');
    return state.dataById
  })

  useEffect(() => {
    dispatch(fetchDataById())
  }, [])

  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  const username = localStorage.getItem('username')
  const avatar = localStorage.getItem('avatar')

  return (
    <div class="navbar bg-purple-700 flex justify-between m-5 rounded-lg">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost text-white btn-circle ml-2 font-semibold flex-col avatar">
            <div class="w-10 rounded-full">
              <img src={avatar} />
            </div>
          </label>
          <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52 text-slate-800 bg-white">
            <li className="">
              {/* <div className="inline-flex"> */}
              <Link to='/update-profile' className="active:text-white" >
                <span class="material-symbols-outlined">
                  account_circle
                </span>
                <p className="mb-0 text-slate-800 active:text-white">Update Profile</p>
              </Link>
              {/* </div> */}
            </li>
            <li>
              {/* <div className="inline-flex"> */}
              <Link to="/change-password" className="active:text-white">
                <span class="material-symbols-outlined">
                  key
                </span>
                <Link to="/change-password" className="active:text-white text-slate-800">Change Password</Link>
                {/* </div> */}
              </Link>
            </li>
            <li>
              <div className="inline-flex" onClick={logout}>
                <span class="material-symbols-outlined">
                  logout
                </span>
                <a className="active:text-white text-slate-800">Logout</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="items-center mb-0 ml-3 text-lg font-semibold text-white inline-flex">
          <p className="items-center mb-0 mr-3">Halo, {username}</p>
        </div>
      </div>
      <div className="ml-3 text-lg font-semibold text-white inline-flex">
        <span class="material-symbols-outlined  text-yellow-500 mr-2">
          database
        </span>
        <p className="items-center mb-0">Coin : {data.coin}</p>
      </div>
      <div className="ml-3 text-lg font-semibold text-white inline-flex">
        <span class="material-symbols-outlined mr-2">
          stadia_controller
        </span>
        <p className="items-center mb-0">Xp : {data.xp}</p>
      </div>
      <div class="gap-2">

      </div>
    </div>
  )
}