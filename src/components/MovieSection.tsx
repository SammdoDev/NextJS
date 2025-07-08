"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  apiUrl: string;
};

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
};

export default function MovieSection({ title, apiUrl }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [apiUrl]);

  return (
    <section className="px-4 py-8 w-full text-white">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="flex flex-row overflow-x-auto gap-4 pb-2">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </section>
  );
}
