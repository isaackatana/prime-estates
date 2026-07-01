import { useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Properties() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("newest");

  const filteredProperties = useMemo(() => {
    let filtered = properties.filter((property) => {
      const matchesLocation =
        !location || property.location === location;

      const matchesType =
        !type || property.type === type;

      const matchesBedrooms =
        !bedrooms || property.bedrooms >= Number(bedrooms);

      const matchesPrice =
        !price || property.price <= Number(price);

      const matchesStatus =
        status === "All" || property.status === status;

      return (
        matchesLocation &&
        matchesType &&
        matchesBedrooms &&
        matchesPrice &&
        matchesStatus
      );
    });

    switch (sort) {
      case "low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      default:
        filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [location, type, bedrooms, price, status, sort]);

  const resetFilters = () => {
    setLocation("");
    setType("");
    setBedrooms("");
    setPrice("");
    setStatus("All");
    setSort("newest");
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-4 text-center">
          <p className="uppercase tracking-[0.3em] text-amber-500">
            Discover Properties
          </p>
        </div>

        {/* Status Tabs */}

        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {["All", "For Sale", "For Rent"].map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`rounded-full px-5 py-2 font-semibold transition ${
                status === item
                  ? "bg-amber-500 text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Filters */}

        <div className="mb-10 rounded-3xl bg-white p-6 shadow-lg">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* Location */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-600">
                Location
              </label>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-3 focus:border-amber-500 focus:outline-none"
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
                className="w-full rounded-xl border border-slate-200 p-3 focus:border-amber-500 focus:outline-none"
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
                className="w-full rounded-xl border border-slate-200 p-3 focus:border-amber-500 focus:outline-none"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Price */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-600">
                Maximum Price
              </label>

              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-3 focus:border-amber-500 focus:outline-none"
              >
                <option value="">Any Price</option>
                <option value="10000000">Under KSh 10M</option>
                <option value="20000000">Under KSh 20M</option>
                <option value="50000000">Under KSh 50M</option>
              </select>
            </div>
          </div>

          {/* Bottom Filter Bar */}

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
            <p className="text-slate-500">
              Filters update automatically.
            </p>

            <button
              onClick={resetFilters}
              className="rounded-xl border border-slate-300 px-5 py-2 font-medium transition hover:border-amber-500 hover:text-amber-500"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Results */}

        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Available Properties
            </h2>

            <p className="mt-2 text-slate-500">
              {filteredProperties.length} properties found
            </p>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3"
          >
            <option value="newest">Newest</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>

        {/* Cards */}

        {filteredProperties.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white py-24 text-center shadow-lg">
            <h3 className="text-3xl font-bold text-slate-900">
              No Properties Found
            </h3>

            <p className="mt-4 text-slate-500">
              Try adjusting your filters to see more results.
            </p>

            <button
              onClick={resetFilters}
              className="mt-8 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}