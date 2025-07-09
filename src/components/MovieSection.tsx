"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PrevArrow, NextArrow } from "@/components/CustomArrows";

type MovieProps = {
  title: string;
  apiUrl: string;
};

type MovieSectionProps = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  genre_ids: number[];
};

const MovieSection: React.FC<MovieProps> = ({ title, apiUrl }) => {
  const [movies, setMovies] = useState<MovieSectionProps[]>([]);
  const fetchMovies = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [apiUrl]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="px-4 py-8 w-full text-white">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <Slider {...settings} className="-mx-2">
        {movies.map((movie) => (
          <div key={movie.id} className="px-2">
            <MovieCard
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MovieSection;
