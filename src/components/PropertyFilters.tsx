import { Search } from "lucide-react";

interface PropertyFiltersProps {
  location: string;
  setLocation: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  bedrooms: string;
  setBedrooms: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
}

export default function PropertyFilters({
  location,
  setLocation,
  type,
  setType,
  bedrooms,
  setBedrooms,
  price,
  setPrice,
}: PropertyFiltersProps) {
  return (
    <div className="mb-12 rounded-3xl bg-white p-6 shadow-lg">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Location
          </label>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-amber-500"
          >
            <option value="">All Locations</option>
            <option value="Diani">Diani</option>
            <option value="Nyali">Nyali</option>
            <option value="Mombasa">Mombasa</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Property Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-amber-500"
          >
            <option value="">All Types</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Bedrooms
          </label>

          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-amber-500"
          >
            <option value="">Any</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-600">
            Price
          </label>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-amber-500"
          >
            <option value="">Any Price</option>
            <option value="10000000">
              Under KSh 10M
            </option>
            <option value="20000000">
              Under KSh 20M
            </option>
            <option value="50000000">
              Under KSh 50M
            </option>
          </select>
        </div>

        {/* Search */}
        <div className="flex items-end">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 font-semibold text-white transition hover:bg-amber-600">
            <Search size={20} />
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}