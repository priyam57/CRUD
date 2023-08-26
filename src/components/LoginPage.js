import React, { useState } from 'react';

function LoginPage({ setIsLoggedIn }) {
  const [isRotated, setIsRotated] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRotation = () => {
    setIsRotated(!isRotated);
    setShowRegistration(!showRegistration);
  };

  const handleClick = () => {
    if ( email.trim() === '' || password.trim()=== '') {
        alert('Please fill in the name and email fields.');
        return;
      }
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleRegistrationSubmit = () => {
    if ( email.trim() === '' || password.trim()=== '') {
        alert('Please fill in the name and email fields.');
        return;
      }
  
    setIsLoggedIn(true);
  };

  return (
    <div className={`unified-auth-page ${isRotated ? 'rotate180' : ''}`}>
      <div className={`auth-container ${showRegistration ? 'rotate180' : ''}`}>
        {showRegistration ? (
            <>
          <div className="auth-content">
            <h2 className='register'>Registration</h2>
            <div className='divider'>
            <input
              type="email"
              placeholder="Email"
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button className='server' onClick={handleRegistrationSubmit}>Register</button>
            <p className='plain' onClick={handleRotation}>Already have an Account</p> 
            </div>
            
            </>
          
        ) : (
          <div className="auth-content">
            <h2>Login</h2>
            <div className='divider'>
            <input
              type="email"
              placeholder="Email"
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button className='server' onClick={handleClick}>Login</button>
            <p className='plain' onClick={handleRotation}>I'm new here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage; 