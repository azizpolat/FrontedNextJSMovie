import { getMovies } from "@/app/api/api";
import Image from "next/image";
import React from "react";

const MovieDetail = async ({ params }) => {
  const id = await params?.id;

  const movie = await getMovies(id);
  console.log(movie);

  return (
    <div className="relative p-7 min-h-screen ">
      <Image
        style={{ objectFit: "cover" }}
        fill
        className="rounded-lg"
        alt="movie-img"
        src={`http://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="font-bold text-4xl my-3">{movie?.title}</div>
        <div className="w-1/2">{movie?.overview}</div>
        <div className="text-lg font-bold my-3">
          {movie?.release_date} - {movie?.vote_average}{" "}
        </div>
        <button className="my-3 w-32 h-10 border rounded-lg bg-white text-black font-bold hover:bg-gray-300 ">
          Trail
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
