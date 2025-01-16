import { getMovie } from "@/app/api/api";
import Movies from "@/components/Movies";
import React from "react";

const Keyword = async ({ params }) => {
  const keyword = params.keyword;

  const movie = await getMovie(keyword);

  return (
    <div>
      {!movie?.results ? (
        <div className="text-white">Aranılan Film Bulunamadı</div>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-3">
          {movie?.results?.map((item, i) => (
            <Movies key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Keyword;
