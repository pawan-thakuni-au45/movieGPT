
export const BACKGROUNG_IMAGE='https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg'
export const LOGO='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
  export const USERICON="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"

export const API_OPTIONS={
      method:"GET",
      headers:{
         accept:"application/json",

         Authorization:"Bearer"+process.env.REACT_APP_TMDB_KEY,
  
      }}
export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANG=[
  {
    identifire:"en",name:"English"
  },{
    identifire:"hindi",name:"Hindi"

  }
]


// export const GEMINI_KEY =process.env.REACT_APP_GEMINI_KEY
// export const GEMINI_KEY =process.env.REACT_APP_GEMINI_KEY
export const GEMINI_KEY =process.env.REACT_APP_GEMINI_KEY

