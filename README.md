# Netflix GPT
- Create react app
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Signup Form
- Form validation
- useRef hook   
- Firebase setup
- Deploying our app to production
- Create Signup/Signin with firebase
- Created our redux store with user slice
- Update Profile
- BugFix: Signup user displayname and profile picture update
- BugFix: If the user is not logged in, Redirect /browse to Login Page and vice versa
- Register TMDB Api & create an app & get access token
- GET Data from TMDB now playing movies list API
- Main container
          - Video Background
          - Video Title
- Secondary Container
          - MoviesList * n
            - Card * n
- Custom Hook for now playing movies
- Created movie slice
- Updated store with movie data
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the video and make it autoplay and mute
- Create Secondary container
    - Movies List -- Popular, Now Playing, Trending, Horror
- Build Movie List
- Build Movie card
- TMDB Image CDN url
- Made the browse page more amazing with Tailwind CSS
- usePopularMovies custom hook
- GPT Search Feature
- GPT Search Page
- GPT Search Bar
- Multilanguage Feature in our App
- platform.openai.com



# Features
- Login/Signup Page
    - Signin/Signup Form
    - Redirect to Browse Page
- Browse (After Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie Suggestions
            - Movies List * N
- Netflix GPT
    - Searcg Bar
    - Movie Suggestions


# Deploy our app to firebase 
1. npm i firebase
2. npm i -g firebase-tools
3. firebase login
4. firebase init -- Select (Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys)
   - Use an existing project
   - Select your firebase project
   - What do you want to use as your public directory? build
   - Configure as a single-page app (rewrite all urls to /index.html)? No
   - Set up automatic builds and deploys with GitHub? No
   - npm run build (Creating an optimized production build...)
5. firebase deploy
Now your app is hosted live
