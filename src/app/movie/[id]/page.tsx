    import Navbar from "@/components/Navbar";
    import MovieCard from "@/components/MovieCard";
    import { notFound } from "next/navigation";

    import { Metadata } from "next";

    interface MovieDetailParams {
    params: { id: string };
    }

    export default async function MovieDetailPage({ params }: MovieDetailParams) {
    const apiKey = process.env.TMDB_API_KEY;

    const [res, trailerRes] = await Promise.all([
        fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&append_to_response=credits`
        ),
        fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${apiKey}`
        ),
    ]);

    if (!res.ok) return notFound();
    const movie = await res.json();
    const trailerData = await trailerRes.json();

    const trailer = trailerData.results.find(
        (v: any) => v.type === "Trailer" && v.site === "YouTube"
    );
    const youtubeUrl = trailer
        ? `https://www.youtube.com/watch?v=${trailer.key}`
        : null;

    const genreId = movie.genres[0]?.id;
    const recRes = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
    );
    const recData = await recRes.json();
    const recommendations = recData.results
        .filter((m: any) => m.id !== movie.id)
        .slice(0, 6);

    return (
        <div className="relative w-full text-white">
        <Navbar />

        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            filter: "brightness(0.4)",
            }}
        />

        <div className="relative z-10 p-8 pt-[65vh] bg-gradient-to-b from-black/70 to-black">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="text-gray-300 mt-2">
            {new Date(movie.release_date).toLocaleString("default", {
                month: "long",
                year: "numeric",
            })}
            {" • "}
            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
            {movie.genres.map((g: any) => (
                <span
                key={g.id}
                className="bg-orange-600 px-3 py-1 rounded-full text-sm"
                >
                {g.name}
                </span>
            ))}
            </div>

            <div className="flex gap-4 mt-5">
            {youtubeUrl && (
                <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 text-sm md:text-lg px-6 py-3 rounded-md font-semibold hover:bg-orange-700 transition"
                >
                ▶ Watch Now
                </a>
            )}
            <button className="border text-sm md:text-lg border-gray-400 px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                + Add to Watchlist
            </button>
            </div>

            {/* Credits */}
            <p className="mt-6 text-sm">
            <strong>Directed by: </strong>
            {movie.credits.crew
                .filter((c: any) => c.job === "Director")
                .map((d: any) => d.name)
                .join(", ")}
            </p>
            <p className="mt-2 text-sm">
            <strong>Starring: </strong>
            {movie.credits.cast
                .slice(0, 6)
                .map((c: any) => c.name)
                .join(", ")}
            ...
            </p>

            <p className="mt-4 text-gray-300">{movie.overview}</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">You Might Also Like</h2>
            <div className="flex flex-row overflow-x-auto gap-4 pb-2">
            {recommendations.map((m: any) => (
                <MovieCard
                key={m.id}
                id={m.id}
                title={m.title}
                release_date={m.release_date}
                poster_path={m.poster_path}
                vote_average={m.vote_average}
                />
            ))}
            </div>
        </div>
        </div>
    );
    }
