import React from "react";
import { useSelector } from "react-redux";
const Header = (props) => {
  const user = useSelector(state =>  state.user);
  console.log('user_', user)
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-row justify-between items-center">
      <img
        src={
          "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
            className="text-[14px] text-zinc-800 text-center font-semibold mt-2"
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
