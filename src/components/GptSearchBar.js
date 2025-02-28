import React, { useRef } from "react";
import { languageStrings } from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { SEARCH_MOVIE } from "../services/apiUrls";
import { apiOptions } from "../utils/constants";
import { searchedMovies } from "../utils/movieSlice";

const GptSearchBar = (props) => {
    const language = useSelector(store => store.config.lang)
    const searchText = useRef(null);
    const dispatch = useDispatch();

   

    const onclickSearch = async (e) => {
        e.preventDefault();

        props.searchMovie(searchText.current.value)
        return
        // console.log('search_', searchText.current.value)
        // make an call to gpt api to get the movie results
        const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: The Gorge, Captain America, House of David, Flight Risk, The Monkey"
        const gptResults = await client.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-4o',
          });
          console.log('gptResults__', gptResults)
          // This is biilable, so we will do simple search here...


    }
  return (
    <div className="pt-[10%] px-16 flex justify-center ">
      <form className="w-1/2 bg-black py-2 grid grid-cols-12 px-2 rounded-lg">
        <input
        ref={searchText}
        onChange={e => {
        props.searchMovie(e.target.value)
        }}
          type="text"
          className="p-2 bg-white col-span-9 rounded-lg focus:outline-none"
          placeholder={languageStrings[language].searchPlaceholder}
        />
        <button onClick={onclickSearch} className="col-span-3 ml-2 p-2 px-4  rounded-lg text-white bg-netflix-red">
          {languageStrings[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
