import React from "react";
import { options, url } from "./api/api";
import Movies from "@/components/Movies";

const Page = async ({ searchParams }) => {
  const url2 = url + "/" + searchParams.genre;

  const res = await fetch(url2, options);

  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((item, i) => (
        <Movies key={i} item={item} />
      ))}
    </div>
  );
};

export default Page;
