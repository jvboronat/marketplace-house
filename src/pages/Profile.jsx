import {getAuth} from 'firebase/auth'

import {useEffect, useState} from 'react'

function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth()

    console.log(auth.currentUser)

    setUser(auth.currentUser)

  }, [])

  return user ? <h1>{user.displayName}</h1>: 'Not logged In'
  
  }
  
  export default Profile;