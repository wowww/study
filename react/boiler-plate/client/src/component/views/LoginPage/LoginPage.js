import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_action/user_action';

function LoginPage() {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
  }

  return (
    <div style={{ 
      display:'flex', justifyContent:'center', alignItems:'center',
      width:'100%', height:'100vh'}}
      onSubmit={onSubmitHandler}
    >
      <form style={{display:'flex', flexDirection:'column'}}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
