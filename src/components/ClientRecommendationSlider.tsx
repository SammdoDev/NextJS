"use client";

import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { PrevArrow, NextArrow } from "./CustomArrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
};

const ClientRecommendationSlider = ({ movies }: { movies: Movie[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="w-full">
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

export default ClientRecommendationSlider;
