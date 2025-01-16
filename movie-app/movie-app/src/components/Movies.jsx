"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ item }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${item?.id}`)}
      className="w-[450px] relative "
    >
      <Image
        className="rounded-lg"
        style={{ objectFit: "cover" }}
        alt="movie-img"
        width={450}
        height={300}
        src={`http://image.tmdb.org/t/p/original/${
          item?.backdrop_path || item?.poster_path
        }`}
      />
      <div className="absolute bottom-0 p-2 h-full w-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{item?.title}</div>
        <div className="text-lg font-bold">
          {item?.release_date} - {item?.vote_average}{" "}
        </div>
      </div>
    </div>
  );
};

export default Movies;
