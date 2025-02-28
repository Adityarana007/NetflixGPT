import React, { useRef, useState } from "react";
import Header from "./Header";
import Loader from "./Loader";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const dispatch = useDispatch();

  const checkValidData = (email, password, fullname) => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
      email
    );
    const isPasswordValid = /^.{4,60}$/.test(password);

    if (fullname?.trim() === "") {
      setFullnameError("Please enter your name.");
      return true;
    } else if (email?.trim() === "") {
      setFullnameError("");
      setEmailError("Please enter email address");
      return true;
    } else if (!isEmailValid) {
      setFullnameError("");
      setEmailError("Please enter a valid email address or phone number.");
      return true;
    } else if (password?.trim() === "") {
      setFullnameError("");
      setEmailError("");
      setPasswordError("Please enter password");
      return true;
    } else if (!isPasswordValid) {
      setFullnameError("");
      setEmailError("");
      setPasswordError(
        "Your password must contain between 4 and 60 characters."
      );
      return true;
    } else {
      setFullnameError("");
      setEmailError("");
      setPasswordError("");
      return null;
    }
  };

  const onSignInClick = () => {
    setIsLoading(true);
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      fullname?.current?.value
    );
    if (message !== null) {
      setIsLoading(false);
      return;
    }

    if (signInForm) {
      // login
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // dispatch(addUser(user))
          setIsLoading(false);
          setPasswordError("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == "auth/invalid-credential") {
            setPasswordError("Invalid email and Password");
          }
          setIsLoading(false);
        });
    } else {
      // Signup Code
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname?.current?.value,
            photoURL: ''
          })
            .then(() => {
              // Profile updated!
              const { displayName, email, uid , photoURL} = auth.currentUser;
              dispatch(addUser({ email, uid, displayName, photoURL }));
              setIsLoading(false);
            })
            .catch((error) => {
              // An error occurred
            });
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  };

  const onSignupClick = () => {
    setSignInForm(!signInForm);
    setEmailError("");
    setPasswordError("");
    setFullnameError("");
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (fullname.current) fullname.current.value = "";
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}

      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Login/Sign-Up Form */}
      <form
        className="bg-black bg-opacity-85 p-6 md:p-12 absolute w-11/12 md:w-3/12 mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl md:text-3xl py-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && (
          <>
            <input
              ref={fullname}
              type="text"
              placeholder="Full Name"
              className="px-2 mt-2 border border-gray-400 w-full bg-transparent h-12 focus:outline-none rounded-sm text-sm"
            />
            {fullnameError && (
              <p className="text-red-600 text-sm mt-2">{fullnameError}</p>
            )}
          </>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className={`px-2 ${
            !signInForm ? "mt-4" : "mt-2"
          } border border-gray-400 w-full bg-transparent h-12 focus:outline-none rounded-sm text-sm`}
        />
        {emailError && (
          <p className="text-red-600 text-sm mt-2">{emailError}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="px-2 mt-4 w-full bg-transparent border border-gray-400 h-12 focus:outline-none rounded-sm text-sm"
        />
        {passwordError && (
          <p className="text-red-600 text-sm mt-2">{passwordError}</p>
        )}

        <button
          className="py-2 mt-4 bg-red-600 w-full rounded-md hover:bg-red-700"
          onClick={onSignInClick}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-400">
            {signInForm ? "New to Netflix? " : "Already Registered? "}
            <button className="text-white" onClick={onSignupClick}>
              {signInForm ? "Sign up now." : "Sign In now."}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
