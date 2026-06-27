import { useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["HOME", "/"],
    ["ABOUT US", "/about"],
    ["PROPERTIES", "/properties"],
    ["PROPERTY MANAGEMENT", "/property-management"],
    ["SHORT-TERM RENTALS", "/short-term-rentals"],
    ["CONTACT", "/contact"],
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition-colors duration-300
     ${isActive ? "text-amber-400" : "text-white hover:text-amber-400"}
     
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:bg-amber-400 after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <NavLink to="/">
          <img
            src="/prime-estates-logo.jpg"
            alt="Prime Estate Logo"
            className="h-10 w-auto"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex">
          {links.map(([label, path]) => (
            <NavLink key={label} to={path} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-white hover:bg-amber-600 transition">
          <CalendarDays size={18} />
          BOOK CONSULTATION
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/70 backdrop-blur-md ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {links.map(([label, path]) => (
            <NavLink
              key={label}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-amber-400" : "text-white"
                } hover:text-amber-400`
              }
            >
              {label}
            </NavLink>
          ))}

          <button className="mt-2 flex items-center gap-2 rounded-xl bg-[#e2b230] px-5 py-3 text-white hover:bg-amber-600 transition w-fit">
            <CalendarDays size={18} />
            BOOK CONSULTATION
          </button>
        </div>
      </div>
    </header>
  );
}