import React from 'react';

const LoginForm = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '70px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    margin: '10px',
    padding: '8px',
    width: '200px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    backgroundColor: '#4285F4',
    color: '#ffffff',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    marginTop: '10px',
    fontFamily: 'Arial, sans-serif',
  };

  const signInWithFacebook = () => {
    console.log('Signing in with Facebook');
  };

  const signInWithGoogle = () => {
    console.log('Signing in with Google');
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <input style={inputStyle} type="text" placeholder="Username" />
      <input style={inputStyle} type="password" placeholder="Password" />
      <button style={buttonStyle}>Login</button>
      <p>or</p>
      <button style={buttonStyle} onClick={signInWithFacebook}>
        Login with Facebook
      </button>
      <button style={buttonStyle} onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
  );
};

export default LoginForm;
