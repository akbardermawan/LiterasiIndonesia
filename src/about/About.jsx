import React, { useEffect, useState } from "react";

import { HeroImgAbout } from "../common";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === HeroImgAbout.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? HeroImgAbout.length - 1 : prev - 1,
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === HeroImgAbout.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <section className="relative h-[600px] w-full overflow-hidden bg-slate-900 sm:h-[650px] lg:h-[700px]">
        {/* =========================
          SLIDES
      ========================== */}
        {HeroImgAbout.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "visible scale-100 opacity-100"
                : "invisible scale-105 opacity-0"
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        ))}

        {/* =========================
          CONTENT
      ========================== */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-white via-gray-400 to-black bg-clip-text text-transparent">
                  Literasi Indonesia
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                Kami ingin memberikan yang terbaik untuk para pembaca.
                Memberikan wawasan dan sesuatu yang menarik untuk dibaca.
              </p>
            </div>
          </div>
        </div>

        {/* =========================
          PREVIOUS BUTTON
      ========================== */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="group absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 sm:left-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* =========================
          NEXT BUTTON
      ========================== */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="group absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 sm:right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* =========================
          SLIDE INDICATORS
      ========================== */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {HeroImgAbout.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === index
                  ? "w-10 bg-purple-500"
                  : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* =========================
          SLIDE NUMBER
      ========================== */}
        <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 text-sm text-white sm:flex">
          <span className="font-semibold">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-8 bg-white/40" />

          <span className="text-white/60">
            {String(HeroImgAbout.length).padStart(2, "0")}
          </span>
        </div>
      </section>
      <section className="w-full bg-slate-50 pb-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Discover new perspectives by exploring a world of knowledge.
            </p>
          </div>

          {/* Main Introduction */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                🌱
              </div>

              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Growing Together, Building a Better Future
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Resilient Village is a community-driven village committed to
                sustainable development by harnessing its potential in tourism,
                industry, and agriculture as key drivers of local economic
                growth and community well-being.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                With its rich natural resources and strong human potential, the
                village strives to create a productive, independent, safe, and
                sustainable community for present and future generations.
              </p>
            </div>

            {/* Right - Resilience */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-2xl">
                  🛡️
                </div>

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Disaster-Resilient Village
                </h2>

                <p className="mt-5 leading-7 text-slate-300">
                  Resilient Village is committed to building a community that is
                  prepared, responsive, and capable of facing various potential
                  disasters.
                </p>

                <p className="mt-4 leading-7 text-slate-300">
                  Disaster preparedness is strengthened through community
                  capacity building, environmental management, risk mapping,
                  evacuation planning, emergency information, and collaboration
                  among the village government, local communities, volunteers,
                  and relevant stakeholders.
                </p>
              </div>
            </div>
          </div>

          {/* Village Potential */}
          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                Village Potential
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Three Pillars of Our Village
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Local potential is developed sustainably to create opportunities
                and improve the quality of life for the community.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Tourism */}
              <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl transition group-hover:scale-110">
                  🏞️
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Tourism
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  We develop natural attractions, cultural heritage, and local
                  wisdom into sustainable tourism destinations that preserve our
                  identity while creating opportunities for the community.
                </p>
              </div>

              {/* Industry */}
              <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl transition group-hover:scale-110">
                  🏭
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Industry & Local Enterprises
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Local industries, SMEs, and community-based businesses help
                  drive innovation, create employment opportunities, and
                  increase the value of locally produced goods and services.
                </p>
              </div>

              {/* Agriculture */}
              <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-2xl transition group-hover:scale-110">
                  🌾
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Agriculture
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Sustainable farming practices support food security, protect
                  natural resources, increase productivity, and strengthen the
                  long-term economic prosperity of our community.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-24 overflow-hidden rounded-3xl bg-emerald-600 px-8 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold sm:text-4xl">
              Stronger Together, Resilient for the Future
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
              Through collaboration, innovation, and community participation,
              Resilient Village is committed to becoming a strong, sustainable,
              and prosperous village—prepared for disasters while continuing to
              grow through its tourism, industry, and agricultural potential.
            </p>

            <div className="mt-8 inline-flex rounded-full bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm">
              🌱 Sustainable · 🛡️ Resilient · 🤝 Community Driven
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
