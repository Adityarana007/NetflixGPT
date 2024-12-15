import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const onSignInClick = (e) => {
    e.preventDefault();
  }
  const onSignupClick = (e) => {
    e.preventDefault();
    setSignInForm(!signInForm)
  }
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg 1800w"
          alt="Background"
        />
      </div>
      <form className="bg-black bg-opacity-85 p-6 md:p-12 absolute w-11/12 md:w-3/12 mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-sm">
        <h1 className="font-bold text-2xl md:text-3xl py-4">{signInForm ? 'Sign In' : 'Sign Up'}</h1>
        {
          !signInForm && (
            <input
            type="text"
            placeholder="Full Name"
            className="px-2 mt-2 border border-gray-400 w-full bg-transparent h-12 focus:outline-none rounded-sm text-sm"
          />
          )
        }
        <input
          type="text"
          placeholder="Email Address"
          className={`px-2 ${!signInForm ? 'mt-4' : 'mt-2'} border border-gray-400  w-full bg-transparent h-12 focus:outline-none rounded-sm text-sm`}
        />
       
        <input
          type="password"
          placeholder="Password"
          className="px-2 mt-4 w-full bg-transparent border border-gray-400 h-12 focus:outline-none rounded-sm text-sm"
        />
        <button className="py-2 mt-4 bg-red-600 w-full rounded-md hover:bg-red-700" onClick={onSignInClick}>
        {signInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <div className="mt-4 text-center">
          {
            signInForm ?  <p className="text-gray-400">
            New to Netflix? <button className="text-white" onClick={onSignupClick}>Sign up now.</button>
          </p> : <p className="text-gray-400">
            Already Registered? <button className="text-white" onClick={onSignupClick}>Sign In now.</button>
          </p>
          }
         
        </div>
      </form>
    </div>


  );
};

export default Login;
