import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c3638] text-white">
      {/* Top Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              PRIME ESTATE
            </h2>

            <p className="text-slate-400">
              Comprehensive real estate solutions
              across residential sales, property
              management, and short-term rentals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/properties">Properties</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Property Sales</li>
              <li>Property Management</li>
              <li>Short-Term Rentals</li>
              <li>Investment Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+254 705 279 631</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@primeestates.co.ke</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  Mombasa, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Prime Estates.
            All rights reserved.
          </p>

          <p>
            Designed & Developed by
            <span className="ml-1 font-semibold text-amber-400">
              Isaac Katana
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}