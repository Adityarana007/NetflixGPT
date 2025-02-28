import React, { useState } from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Loader from "./Loader";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  // NowPlayinMovies hook called
  useNowPlayingMovies();

  // Popular Movies hook
  usePopularMovies();

// trending movies
useTrendingMovies();

// upcoming movies
useUpcomingMovies();


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
      {
        showGptSearch ? (
  <GptSearch/>

        ): (
          <>
           <MainContainer/>
      <SecondaryContainer/>

          </>
        )
      }
     
    </div>
  );
};

export default Browse;
