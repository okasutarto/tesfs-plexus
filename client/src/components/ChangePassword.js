import { useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import { updatePassword } from '../store/actions/actionCreator'


export default function ChangePassword() {
  const dispatch = useDispatch()
  const password = useRef();
  const cPassword = useRef();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [input, setInput] = useState({
    password: ''
  })

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password.current.value === cPassword.current.value) {
        setShowErrorMessage(false);
        setCPasswordClass('form-control is-valid')
      } else {
        setShowErrorMessage(true)
        setCPasswordClass('form-control is-invalid')
      }
    }
  }, [isCPasswordDirty])



  const checkPasswords = (e) => {
    setIsCPasswordDirty(true);
    if (isCPasswordDirty) {
      if (password.current.value === cPassword.current.value) {
        setShowErrorMessage(false);
        setCPasswordClass('form-control is-valid')
      } else {
        setShowErrorMessage(true)
        setCPasswordClass('form-control is-invalid')
      }
    }
  }

  const submitPassword = (e) => {
    e.preventDefault()
    console.log('tes', '<<<< tes password');
    dispatch(updatePassword(input))
  }

  return (
    <div class="hero mt-10">
      <div class="hero-content flex-col lg:flex-row-reverse w-1/2">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
          <div class="card-body text-slate-500">
            <div class="form-control">
              <div class="text-2xl font-bold text-center">
                <p>CHANGE PASSWORD</p>
              </div>
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">New Password</span>
              </label>
              <input type="password" class="input input-bordered bg-slate-100"
                ref={password}
                value={input.password}
                onChange={(e) => {
                  setInput({
                    ...input,
                    password: e.target.value
                  });
                }}
              />
            </div>
            <div class="form-control">
              <label class="label font-semibold ">
                <span class="label-text text-slate-500">Confirm New Password</span>
              </label>
              <div >
                <input type="password" class="input input-bordered bg-slate-100 w-full"
                  id="confirmPassword" ref={cPassword}
                  onChange={checkPasswords}
                />
              </div>
              {showErrorMessage && isCPasswordDirty ? <div className='mt-2 font-semibold text-red-500'> Passwords did not match </div> : ''}
            </div>
            <div class="form-control mt-5">
              <button onClick={submitPassword}
                class="btn btn-primary text-white bg-purple-600 border-purple-600 hover:bg-purple-700 hover:border-purple-700"
              >Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}