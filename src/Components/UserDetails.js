//UserDetails.js

import React from 'react'
import {useParams} from 'react-router-dom';

function UserDetails() {
    const {userId} = useParams();
  return (
    <div>
        <h1 className="text-blue-700">User {userId}</h1>
    </div>
  )
}

export default UserDetails
