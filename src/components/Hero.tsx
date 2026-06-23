import { ArrowRight, CirclePlay, ShieldCheck } from "lucide-react";

import heroImage from "../assets/hero/1.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <p className="mb-4 tracking-[0.3em] text-amber-400 uppercase">
            Premier Real Estate Solutions
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Find. Buy. Rent.
            <br />
            We Manage.
          </h1>

          <p className="mb-8 text-lg text-slate-200 md:text-xl">
            Comprehensive real estate solutions across residential
            sales, property management, and short-term rental services.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex gap-1 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600">
              BROWSE PROPERTIES <ArrowRight /> 
            </button>

            <button className="flex gap-1 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900">
              <CirclePlay /> WATCH VIDEO
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 ml-6 mr-6 rounded-3xl bg-white p-3 shadow-2xl">
        <div className="grid md:grid-cols-5">
          <div className="border-r p-5">
            <p className="text-xs uppercase text-slate-500">
              Location
            </p>

            <select className="mt-2 w-full outline-none">
              <option>Any Location</option>
              <option>Diani</option>
              <option>Nyali</option>
              <option>Mombasa</option>
            </select>
          </div>

          <div className="border-r p-5">
            <p className="text-xs uppercase text-slate-500">
              Property Type
            </p>

            <select className="mt-2 w-full outline-none">
              <option>Any Type</option>
              <option>Villa</option>
              <option>Apartment</option>
            </select>
          </div>

          <div className="border-r p-5">
            <p className="text-xs uppercase text-slate-500">
              Price Range
            </p>

            <select className="mt-2 w-full outline-none">
              <option>Any Price</option>
            </select>
          </div>

          <div className="border-r p-5">
            <p className="text-xs uppercase text-slate-500">
              Bedrooms
            </p>

            <select className="mt-2 w-full outline-none">
              <option>Any</option>
            </select>
          </div>

          <div className="flex items-center justify-center p-3">
            <button className="w-full rounded-xl bg-slate-950 py-4 text-white">
              Search Properties
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <ShieldCheck size={50} />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Trusted by 100+ Clients
            </h3>

            <p className="mt-2 text-slate-300">
              Delivering premier service you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}