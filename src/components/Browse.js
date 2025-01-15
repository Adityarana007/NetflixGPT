import React, { useState } from 'react'
import Header from './Header'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import Loader from './Loader';

const Browse = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onLogoutClick = () => {
    setIsLoading(true);
    console.log('logout_success')
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('logout successfullt')
    setIsLoading(false);

      navigate('/')
    }).catch((error) => {
      // An error happened.
    setIsLoading(false);

      navigate('/error')

    });
  }
  return (
    <div>
      <Header isAuthenticated={true} onSignoutCallback={onLogoutClick} />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
    </div>
  )
}

export default Browse