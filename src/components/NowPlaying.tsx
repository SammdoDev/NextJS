"use client";

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

type MovieProps = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
};

const NowPlaying: React.FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const fetchNowPlaying = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=e63c4ec8da51f71a10587b0affa8f103&language=id-ID&page=1`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return (
    <section className="px-4 py-8 w-full text-white">
      <h2 className="text-2xl font-bold mb-6">🎬 Now Playing</h2>
      <div className="flex flex-row overflow-x-auto gap-4 pb-2">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </section>
  );
};

export default NowPlaying;
