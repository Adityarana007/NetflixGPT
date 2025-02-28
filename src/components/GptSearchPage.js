import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div>
       {/* Background Image */}
       <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage;