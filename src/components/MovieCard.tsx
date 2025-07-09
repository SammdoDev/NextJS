  "use client";
  import { useRouter } from "next/navigation";
  import { Star } from "lucide-react";
  import React from "react";

  type MovieCardProps = {
    id: number | undefined;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number ;
    onClick?: (e: any) => void;
  };

  const MovieCard: React.FC<MovieCardProps> = ({
    id,
    title,
    release_date,
    poster_path,
    vote_average,
    onClick,
  }) => {
    const router = useRouter();
    return (
      <div
        onClick={() => router.push(`/movie/${id}`)}
        className="bg-gray-900 rounded-xl shadow-md hover:shadow-white/40 transition-all overflow-hidden cursor-pointer min-w-[220px]"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-full h-72 object-cover"
        />
        <div className="p-3">
          <h3 className="text-sm font-semibold text-white line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-gray-400">{release_date}</p>
          <div className="text-yellow-400 flex items-center gap-1 text-sm mt-1">
            <Star size={14} /> {vote_average.toFixed(1)}
          </div>
        </div>
      </div>
    );
  };

  export default MovieCard;
