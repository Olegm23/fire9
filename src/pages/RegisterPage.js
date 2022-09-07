import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../redux/actions";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [displayName, setDisplayName] = useState('');
  const user = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName))
  }

  return (
    <div>
      {/* <header>
        <Link to={'/login'}>SIGN IN</Link>
      </header> */}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        <input value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type='password' placeholder="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        <button type='submit'>SIGN UP</button>
      </form>
    </div>
  );
};

export default RegisterPage;