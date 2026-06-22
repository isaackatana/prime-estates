import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
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
                <span>+254 700 000 000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@primeestate.co.ke</span>
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

      {/* Newsletter */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div>
            <h3 className="text-xl font-semibold">
              Subscribe to Property Updates
            </h3>

            <p className="text-slate-400">
              Get notified about new listings and
              investment opportunities.
            </p>
          </div>

          <form className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-amber-500 px-6 py-3 font-medium text-white hover:bg-amber-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Prime Estate.
            All rights reserved.
          </p>

          <p>
            Website Designed & Developed by
            <span className="ml-1 font-semibold text-amber-400">
              Isaac Katana
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}