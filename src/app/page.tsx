import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import MovieSection from "@/components/MovieSection";

export default function Home() {
  const genre = ["now_playing", "popular", "top_rated", "upcoming"];
  const title = ["now playing", "popular", "top rated", "upcoming"];
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      <section className="text-center py-6 text-white">
        <h1 className="text-4xl font-bold mb-2">Welcome to FilminID</h1>
        <p className="text-gray-300">
          Temukan film favoritmu.
        </p>
      </section>

      <Menu />

      {genre.map((i: any) => (
        <MovieSection
          key={i}
          title={title[genre.indexOf(i)]}
          apiUrl={`https://api.themoviedb.org/3/movie/${i}?api_key=e63c4ec8da51f71a10587b0affa8f103&language=id-ID&page=1`}
        />
      ))}
    </main>
  );
}
