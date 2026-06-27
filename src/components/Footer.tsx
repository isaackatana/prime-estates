import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0c3638] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div>
          <img className="h-10 w-auto" src="/prime-estates-logo.jpg" alt="" />

          <p className="mt-6 leading-8 text-slate-300">
            Comprehensive real estate solutions across residential sales,
            property management, and short-term rental services throughout
            Kenya.
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-full bg-white/10 p-3 transition duration-300 hover:bg-amber-500"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-4 text-slate-300">
            <li>
              <a className="transition hover:text-amber-400" href="/">
                Home
              </a>
            </li>

            <li>
              <a className="transition hover:text-amber-400" href="/about">
                About Us
              </a>
            </li>

            <li>
              <a className="transition hover:text-amber-400" href="/properties">
                Properties
              </a>
            </li>

            <li>
              <a className="transition hover:text-amber-400" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-xl font-semibold">
            Contact Us
          </h3>

          <div className="space-y-5 text-slate-300">
            <div className="flex items-center gap-4">
              <Phone className="text-amber-400" size={20} />
              <span>+254 705 279 631</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-amber-400" size={20} />
              <span>info@primeestate.co.ke</span>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-amber-400" size={20} />
              <span>
                Diani Beach,
                <br />
                Kwale County,
                <br />
                Kenya
              </span>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-amber-400" size={20} />
              <div>
                Mon - Fri
                <br />
                8:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-6 text-xl font-semibold">
            Newsletter
          </h3>

          <p className="mb-6 leading-7 text-slate-300">
            Subscribe to receive the latest property listings, investment
            opportunities and real estate news.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-400 focus:border-amber-400 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 py-4 font-semibold transition hover:bg-amber-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Prime Estate. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-amber-400">
              Terms of Service
            </a>
          </div>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-amber-400">
              Isaac Katana
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}