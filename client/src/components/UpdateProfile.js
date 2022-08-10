import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { fetchUserById, updateProfiles } from '../store/actions/actionCreator'

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    // console.log(state.user, '<<< state.user');
    return state.user;
  })

  useEffect(() => {
    dispatch(fetchUserById(user.id))
  }, [])

  const [updateProfile, setUpdateProfile] = useState({
    email: user.email,
    username: user.username,
    fullName: user.fullName,
    phone: user.phone,
    avatar: user.avatar
  })


  const submitUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProfiles(updateProfile))
  }

  return (
    <div class="hero min-h-screen mt-5">
      <div class="hero-content flex-col lg:flex-row-reverse w-1/2">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
          <div class="card-body text-slate-500">
            <div class="form-control">
              <div class="text-2xl font-bold text-center">
                <p>UPDATE PROFILE</p>
              </div>
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered bg-slate-100"
                value={updateProfile.email}
                onChange={(e) => {
                  setUpdateProfile({
                    ...updateProfile,
                    email: e.target.value
                  });
                }} />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Full Name</span>
              </label>
              <input type="text" placeholder="full name" class="input input-bordered bg-slate-100"
                value={updateProfile.fullName}
                onChange={(e) => {
                  setUpdateProfile({
                    ...updateProfile,
                    fullName: e.target.value
                  });
                }} />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Username</span>
              </label>
              <input type="text" placeholder="username" class="input input-bordered bg-slate-100"
                value={updateProfile.username}
                onChange={(e) => {
                  setUpdateProfile({
                    ...updateProfile,
                    username: e.target.value
                  });
                }} />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Avatar</span>
              </label>
              <input type="text" placeholder="avatar" class="input input-bordered bg-slate-100"
                value={updateProfile.avatar}
                onChange={(e) => {
                  setUpdateProfile({
                    ...updateProfile,
                    avatar: e.target.value
                  });
                }} />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Phone</span>
              </label>
              <input type="text" placeholder="08123456789" class="input input-bordered bg-slate-100"
                value={updateProfile.phone}
                onChange={(e) => {
                  setUpdateProfile({
                    ...updateProfile,
                    phone: e.target.value
                  });
                }} />
            </div>
            <div class="form-control mt-5">
              <button onClick={submitUpdate} class="btn btn-primary text-white bg-purple-600 border-purple-600 hover:bg-purple-700 hover:border-purple-700"
              >Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}