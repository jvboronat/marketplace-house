import {getAuth} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

import {useEffect, useState} from 'react'

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }


  return <div className='profile'>
    <div className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button type="button" onClick={onLogout} className="logOut">
        Logout
      </button>
    </div>
    </div>
  
  }
  
  export default Profile;