import React from 'react'
import {Button} from 'dp_button'
import {BsUpcScan} from 'react-icons/bs';


const Button1 = () => {
    return (
        <><div className="App">
        <Button label="Login" righticon={<BsUpcScan className="justify-start space-x-2" size={24} />}/>
          Hi
        </div></>
        
      );
    
}

export default Button1