export const getMovieList = (page = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=a9b9fc20b24e7aac267be09f72d57e26&page=${page}&with_original_language=hi&region=IN&primary_release_year=2024`
  ).then((res) => res.json());
};

//2024 Hindi : https://api.themoviedb.org/3/discover/movie?api_key=a9b9fc20b24e7aac267be09f72d57e26&page=1&with_original_language=hi&primary_release_year=2024
//2023 All : https://api.themoviedb.org/3/discover/movie?api_key=a9b9fc20b24e7aac267be09f72d57e26&page=1&with_original_language=hi&primary_release_year=2023&region=IN

export const getMovieDetails = (mid) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${mid}?api_key=a9b9fc20b24e7aac267be09f72d57e26`
  ).then((res) => res.json());
};

export const getMovieCast = (mid) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${mid}/credits?api_key=a9b9fc20b24e7aac267be09f72d57e26`
  ).then((res) => res.json());
};
