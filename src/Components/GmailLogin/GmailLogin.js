// GmailLogin.js
import React, { useState } from 'react';
import './GmailLogin.css';

const GmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here (authentication).
  };

  return (
    <div className="gmail-login-container">
      <div className="gmail-logo">Gmail</div>
      <form className="gmail-login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email or phone"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div className="gmail-login-options">
          <label>
            <input type="checkbox" /> Stay signed in
          </label>
          <a href="#forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="gmail-login-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default GmailLogin;
