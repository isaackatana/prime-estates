import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <img
            src="/prime-estates-logo.jpg"
            alt="Prime Estate Logo"
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden gap-8 md:flex">
          <Link className="text-white" to="/">
            HOME
          </Link>

          <Link className="text-white" to="/about">
            ABOUT US
          </Link>

          <Link className="text-white" to="/properties">
            PROPERTIES
          </Link>

          <Link className="text-white" to="/properties">
            PROPERTY MANAGEMENT
          </Link>

          <Link className="text-white" to="/properties">
            SHORT-TERM RENTALS
          </Link>

          <Link className="text-white" to="/contact">
            CONTACT
          </Link>
        </nav>

        <button className="flex gap-1 rounded-xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600">
          <CalendarDays /> BOOK CONSULTATION
        </button>
      </div>
    </header>
  );
}