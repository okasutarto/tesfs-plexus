import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux'
import React, { useState, useRef, useEffect } from 'react'
import { forgetPassword } from '../store/actions/actionCreator'

const App = () => {

  const dispatch = useDispatch()
  const password = useRef();
  const cPassword = useRef();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [input, setInput] = useState({
    email: '',
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

  // const submitPassword = (e) => {
  //   e.preventDefault()
  //   console.log('tes', '<<<< tes password');
  //   dispatch(updatePassword(input))
  // }

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // e.preventDefault()
    dispatch(forgetPassword(input))
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <p className="mr-1">Forget Password ? </p>
      <p class="hover:cursor-pointer hover:text-blue-700" type="primary" onClick={showModal}>
        click here
      </p>
      <Modal
        visible={visible}
        title="Reset Password"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <div class="card-body text-slate-500">
          <div class="form-control">
            <label class="label font-semibold ">
              <span class="label-text text-slate-500">Email</span>
            </label>
            <input type="email" placeholder="your email" class="input input-bordered bg-slate-100"
              value={input.email}
              onChange={(e) => {
                setInput({
                  ...input,
                  email: e.target.value
                });
              }}
            />
          </div>
          <div class="form-control">
            <label class="label font-semibold ">
              <span class="label-text text-slate-500">New Password</span>
            </label>
            <input type="password" placeholder="" class="input input-bordered bg-slate-100"
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
            <input type="password" placeholder="password" class="input input-bordered bg-slate-100"
              id="confirmPassword" ref={cPassword}
              onChange={checkPasswords}
            />
          </div>
          {showErrorMessage && isCPasswordDirty ? <div className='mt-2 font-semibold text-red-500'> Passwords did not match </div> : ''}
        </div>
      </Modal>
    </>
  );
};

export default App;