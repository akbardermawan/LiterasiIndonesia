import React from "react";
import { books, topBooks } from "../common";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            {/* Brand */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg shadow-indigo-500/20 overflow-hidden">
                <img src="/LI.png" alt="" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
                  Perpustakaan Digital
                </p>
                <h1 className="text-xl font-bold text-gray-500 sm:text-2xl">
                  Literasi Indonesia
                </h1>
              </div>
            </div>
            {/* Heading */}
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-gray-500 sm:text-5xl lg:text-6xl">
              Buka halaman baru,
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                temukan dunia baru.
              </span>
            </h2>
            {/* Quote */}
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-400 sm:text-2xl">
              Buku adalah
              <span className="font-semibold text-indigo-400">
                tuangan pikiran
              </span>
              dari yang tidak bisa diucapkan.
            </p>
            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Jelajahi berbagai koleksi buku pilihan dan temukan cerita,
              pengetahuan, serta inspirasi baru di setiap halaman.
            </p>
            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-indigo-500/30">
                Jelajahi Buku
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
              <a href="#koleksibuku">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-slate-600 hover:bg-white/[0.08]">
                  Lihat Koleksi <span>↗</span>
                </button>
              </a>
            </div>
            {/* Small stats */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold text-gray-500">1K+</p>
                <p className="text-sm text-slate-500">Koleksi Buku</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-500">500+</p>
                <p className="text-sm text-slate-500">Penulis</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-500">24/7</p>
                <p className="text-sm text-slate-500">Akses Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= TOP BOOK ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
              Pilihan pembaca
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Top Books
            </h2>
            <p className="mt-2 text-slate-500">
              Buku yang sedang banyak dibaca saat ini.
            </p>
          </div>
          <button className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Lihat semua →
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {topBooks.slice(0, 3).map((book) => (
            <div
              key={book.id}
              className="group flex overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={book.image}
                alt={book.title}
                className="h-56 w-40 object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="flex flex-1 flex-col justify-center p-6">
                <span className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  {book.category}
                </span>
                <h3 className="mt-3 text-xl font-bold">{book.title}</h3>
                <p className="mt-1 text-sm text-slate-500"> {book.author} </p>
                <a href={book.url}>
                  <button className="mt-5 w-fit text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    Lihat Buku
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= LIST BOOK ================= */}
      <section className="bg-white" id="koleksibuku">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-500">
              Koleksi buku
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Semua Buku
            </h2>
            <p className="mt-2 text-slate-500">
              Temukan buku yang sesuai dengan minat dan kebutuhanmu.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="group overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                    {book.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="truncate text-lg font-bold">{book.title} </h3>
                  <p className="mt-1 text-sm text-slate-500"> {book.author} </p>
                  <a href={book.url}>
                    <button className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600">
                      Lihat Buku
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
