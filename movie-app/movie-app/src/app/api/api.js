export const url = "https://api.themoviedb.org/3/movie";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWQwNDYyNWQ0M2JmNTY3YWIwZjI1ODBmNWVkOGExYiIsIm5iZiI6MTcyMjUyNzU5My42NzIsInN1YiI6IjY2YWJhZjY5NjU5Y2JhMDM5YmIyODg2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TR2X7nQdTYqXujC4MusWIeHRiu4fD_j61sEdps1gaXo",
  },
};

export const getMovies = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=string&language=en-US`,
    options
  );
  return await res.json();
};

export const getMovie = async (keyword) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`,
    options
  );
  const data = await res.json();
  return data;
};
