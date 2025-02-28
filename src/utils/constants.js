export const NETFLIX_LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const apiOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY 
    }
  };

  export const MOVIE_LOGO_URL = 'https://image.tmdb.org/t/p/w500/'
  export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg'

  export const SUPPORTED_LANGUAGES = [
    {
      identifier: 'en',
      name: 'English'
    },
    {
      identifier: 'hindi',
      name: 'Hindi'
    },
    {
      identifier: 'spanish',
      name: 'Spanish'
    }
  ];

  export const OPENAI_KEY = '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'