import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import MovieSection from "@/components/MovieSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />

      <section className="text-center py-6 text-white">
        <h1 className="text-4xl font-bold mb-2">Welcome to PremiereTix</h1>
        <p className="text-gray-300">Temukan film favoritmu & pesan tiket dengan mudah.</p>
      </section>

      <Menu />

      <MovieSection
        title="Now Playing"
        apiUrl="https://api.themoviedb.org/3/movie/now_playing?api_key=e63c4ec8da51f71a10587b0affa8f103&language=id-ID&page=1"
      />

      <MovieSection
        title="Popular"
        apiUrl="https://api.themoviedb.org/3/movie/popular?api_key=e63c4ec8da51f71a10587b0affa8f103&language=id-ID&page=1"
      />

      <MovieSection
        title="Top Rated"
        apiUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=e63c4ec8da51f71a10587b0affa8f103&language=id-ID&page=1"
      />

      <MovieSection
        title="Upcoming"
        apiUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=e63c4ec8da51f71a10587b0affa8f103&language=id-ID&page=1"
      />
    </main>
  );
}
