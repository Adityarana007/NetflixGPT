import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = (props) => {
  const user = useSelector(state =>  state.user);
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)


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

  const handleGptSearch = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-row items-center">
      <img
        src={
          NETFLIX_LOGO
        }
        alt="logo"
        className="w-44"
      />
      {
        props?.isAuthenticated && (
          
            !showGptSearch && (
              <h1 className="text-3xl text-white font-bold w-1/2">Welcome, {user?.displayName}</h1>
            )
          
        )
      }
      <div className="flex items-center  w-full justify-end ">

      {props?.isAuthenticated && (
        <>
        {
          showGptSearch && (
            <select className="bg-gray-300 rounded-sm text-sm p-2 focus:outline-none mr-10" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES?.map(item =>  <option value={item.identifier}>{item.name}</option>)}
            </select>  
          )
        }
           
        <button className="py-2 px-4 h-34 bg-slate-600 text-white shadow-md rounded-md mr-10" onClick={handleGptSearch}>
          {showGptSearch ? 'Home Page' : 'GPT Search'} </button>
       
        
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

    </div>
  );
};

export default Header;
