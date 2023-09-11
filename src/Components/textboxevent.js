import React, { useState } from 'react';

function Textbox() {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setIsValid(newText.trim() !== ''); // Check if text is not empty
  };

  return (
    <div>
      <h1>Text Input Example</h1>
      <input className='border '
        type="text"
        value={text}
        onChange={handleInputChange}
        style={{ borderColor: isValid ? 'green' : 'red' , background: isValid ? 'GREEN' : 'RED' }}
      />
      {isValid ? (
        <div style={{ color: 'green'  }}>Text is valid.</div>
      ) : (
        <p style={{ color: 'red' }}>Please enter valid input.</p>
      )}
    </div>
  );
}

export default Textbox;
