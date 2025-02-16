import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
const Header = (props) => {
  const user = useSelector(state =>  state.user);
  const navigate= useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Set up the auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signed in
        const {displayName, email, uid} = user;
        dispatch(addUser({email, uid, displayName}));
        navigate('/browse')
      } else {
        // User logged out
        dispatch(removeUser());
        navigate('/')

      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []); // Include dispatch in the dependency array


  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-row justify-between items-center">
      <img
        src={
          NETFLIX_LOGO
        }
        alt="logo"
        className="w-44"
      />
      {props?.isAuthenticated && (
        <>
         <div>
            <h1 className="text-3xl text-black-600 font-bold">Welcome, {user?.displayName}</h1>
          </div>
        <div className=" flex flex-col justify-center items-center">
         
          <img
            className="h-12"
            src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
          />
          <button
            onClick={props?.onSignoutCallback}
            className="text-[14px] text-white text-center font-semibold mt-2"
          >
            Sign Out
          </button>
        </div>
        </>

      )}
    </div>
  );
};

export default Header;
