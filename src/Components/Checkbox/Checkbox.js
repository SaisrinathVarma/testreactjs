import React, { useState } from 'react';
import './checkbox.css';

function Checkbox() {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const handleDefaultChange = () => {
    setDefaultChecked(!defaultChecked);
  };

  const handleCheckedChange = () => {
    setChecked(!checked);
  };

  const handleDisabledChange = () => {
    setDisabled(!disabled);
  };

  return (
    <div style={{ border: '1px solid #000', padding: '20px',  height:'160px', position:'relative', width:'200px'
     }}>
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={defaultChecked}
            onChange={handleDefaultChange}
          />
          Default Checkbox
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckedChange}
          />
          Checked Checkbox
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            disabled={disabled}
            onChange={handleDisabledChange}
          />
          Disabled Checkbox
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
