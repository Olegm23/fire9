import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/actions';
import CustomLink from './CustomLink';
import '../Header.css';

const Header = () => {
  const user = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      dispatch(logoutInitiate())
    }
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  return (
    <div className='header'>
      <Link className={'logo'} to='/'>
        <p>Contact App</p>
      </Link>
      <div className='header-right'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to={'/addContact'}>Add Contact</CustomLink>
        <CustomLink to={'/about'}>About</CustomLink>
        <CustomLink to={'/register'}>Sign Up</CustomLink>
        {user ? (
          <p style={{ cursor: 'pointer' }} onClick={handleAuth}>Sign Out</p>
        ) : (
          <CustomLink to={'/login'}>Sing In</CustomLink>
        )}
      </div>
    </div>
  )
}

export default Header