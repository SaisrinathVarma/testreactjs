import React , {useState}from 'react'

function Regex() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const checkEmail = () => {
      const regEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}(.[a-z{2,8}])?/gi;
      if (regEx.test(email)) {
        setMessage("Email is Valid");
      } else if (!regEx.test(email) && email !== "") {
        setMessage("Email is Not Valid");
      } else {
        setMessage("");
      }
    };
  
    const handleOnChange = (e) => {
      setEmail(e.target.value);
    };
  
    return (
      <>
        <div className="flex justify-center">
          <h2>Email and password Regex </h2>
        </div>
        <div className="flex justify-center mt-5">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input id="email" className="input" type="email" placeholder="email"value={email} onChange={handleOnChange} required/>
          <button onClick={checkEmail}>Check</button>
          <p className="message">{message}</p>
        </div>
      </>
    );
  }
  
  export default Regex;
  