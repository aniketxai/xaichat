"use client"
import { useState } from 'react';
import './Login.css';
import axios from 'axios';
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    //API call
    try {
      const response = axios.post(isLogin ? '/api/users/login' : '/api/users/signup', formData)
      
        console.log('Signup Sucess', response.data);
    

      
    } catch (error) {
      console.error('Error:', error.message);
    }




  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      username: ''
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p>{isLogin ? 'Sign in to continue' : 'Sign up to get started'}</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required={!isLogin}
              />
            </div>
          )}

          {isLogin && (
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login">
          <button className="social-btn google-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M19.8 10.2273C19.8 9.51818 19.7364 8.83636 19.6182 8.18182H10.2V12.05H15.5818C15.3364 13.3 14.5909 14.3591 13.4727 15.0682V17.5773H16.7727C18.6091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
              <path d="M10.2 20C12.9 20 15.1636 19.1045 16.7727 17.5773L13.4727 15.0682C12.5318 15.6682 11.3409 16.0227 10.2 16.0227C7.59545 16.0227 5.39091 14.2636 4.56364 11.9H1.16364V14.4909C2.76364 17.6818 6.21818 20 10.2 20Z" fill="#34A853"/>
              <path d="M4.56364 11.9C4.35455 11.3 4.23636 10.6591 4.23636 10C4.23636 9.34091 4.35455 8.7 4.56364 8.1V5.50909H1.16364C0.490909 6.85909 0.1 8.38636 0.1 10C0.1 11.6136 0.490909 13.1409 1.16364 14.4909L4.56364 11.9Z" fill="#FBBC05"/>
              <path d="M10.2 3.97727C11.4591 3.97727 12.5909 4.40909 13.4727 5.24545L16.3818 2.33636C15.1591 1.19091 12.9045 0.5 10.2 0.5C6.21818 0.5 2.76364 2.81818 1.16364 5.50909L4.56364 8.1C5.39091 5.73636 7.59545 3.97727 10.2 3.97727Z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="toggle-mode">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button type="button" onClick={toggleMode} className="toggle-btn">
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
