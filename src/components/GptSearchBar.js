import React from "react";
import { languageStrings } from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const language = useSelector(store => store.config.lang)
    const onclickSearch = (e) => {
        e.preventDefault()
    }
  return (
    <div className="pt-[10%] px-16 flex justify-center ">
      <form className="w-1/2 bg-black py-2 grid grid-cols-12 px-2 rounded-lg">
        <input
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
