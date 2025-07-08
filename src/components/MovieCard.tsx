"use client";

import { Star } from "lucide-react";

type Props = {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
};

export default function MovieCard({
  title,
  release_date,
  poster_path,
  vote_average,
}: Props) {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-md hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden min-w-[220px]">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 space-y-1">
        <h3 className="text-base font-semibold text-white line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-400">{release_date}</p>
        <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
          {vote_average.toFixed(1)}
        </div>
      </div>
    </div>
  );
}
