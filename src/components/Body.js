import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    // Set up the auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signed in
        console.log("user_onauthstatechanged", user);
        const {displayName, email, uid} = user;
        dispatch(addUser({email, uid, displayName}));
      } else {
        // User logged out
        dispatch(removeUser());
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []); // Include dispatch in the dependency array

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
