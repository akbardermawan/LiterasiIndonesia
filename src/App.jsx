import { Outlet } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <main className="">
      {/* 🔥 SEO LANDING (VISIBLE UNTUK GOOGLE, HIDDEN UNTUK USER) */}
      <section className="sr-only">
        <h1>Literasi Indonesia</h1>

        <p>Perpustakaan Digital</p>

        <h2>LI</h2>
        <p>Digital Library</p>

        <h2>Location</h2>
        <p>Indonesia</p>
      </section>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default App;
