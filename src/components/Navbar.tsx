import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <h1 className="text-2xl font-bold text-white">
            PRIME ESTATE
          </h1>

          <p className="text-xs tracking-widest text-amber-400 uppercase">
            Premier Real Estate Solutions
          </p>
        </div>

        <nav className="hidden gap-8 md:flex">
          <Link className="text-white" to="/">
            Home
          </Link>

          <Link className="text-white" to="/about">
            About
          </Link>

          <Link className="text-white" to="/properties">
            Properties
          </Link>

          <Link className="text-white" to="/contact">
            Contact
          </Link>
        </nav>

        <button className="rounded-xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">
          Book Consultation
        </button>
      </div>
    </header>
  );
}