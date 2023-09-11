import React, {useState} from 'react'
import { Heading } from './Heading'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    // Implement your login logic here
    if (email && password) {
      // You can send a request to your authentication backend here
      // For a simple example, we'll just log the user in on the client-side
      console.log(`Logged in with Email: ${email}`);
    } else {
      console.error('Please enter email and password.');
    }
  };
  return (
    <>
    <Heading/>
    <div className="login-container w-6/12 justify-center mx-auto">
      <h1 className=' h-9 font-extrabold '>Login Page</h1>
      <div className="form-group">
        <label className='bg'>Email:</label>
        <input type="email" className=' hover:bg-red-50'value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" className=' hover:bg-red-50' value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div></>
  );
};
export default Login;


