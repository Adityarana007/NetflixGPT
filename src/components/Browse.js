import React, { useState } from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Loader from "./Loader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // NowPlayinMovies hook called
  useNowPlayingMovies();


  const onLogoutClick = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoading(false);
      })
      .catch((error) => {
        // An error happened.
        setIsLoading(false);

        navigate("/error");
      });
  };
  return (
    <div>
      <Header isAuthenticated={true} onSignoutCallback={onLogoutClick} />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}
      {/* 
        Main container
          - Video Background
          - Video Title
        Secondary Container
          - MoviesList * n
            - Card * n
    
      */}

      <MainContainer/>
      {/* <SecondaryContainer/> */}

    </div>
  );
};

export default Browse;
