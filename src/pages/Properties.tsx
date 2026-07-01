import { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import PropertyFilters from "../components/PropertyFilters";

export default function Properties() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");

  const filteredProperties = properties.filter((property) => {
    const matchesLocation =
      !location || property.location === location;

    const matchesType =
      !type || property.type === type;

    const matchesBedrooms =
      !bedrooms || property.bedrooms >= Number(bedrooms);

    const matchesPrice =
      !price || property.price <= Number(price);

    return (
      matchesLocation &&
      matchesType &&
      matchesBedrooms &&
      matchesPrice
    );
  });

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="uppercase tracking-[0.25em] text-amber-500">
            Explore
          </p>

          <h2 className="mt-2 text-5xl font-bold">
            Find Your Perfect Property
          </h2>
        </div>

        <PropertyFilters
          location={location}
          setLocation={setLocation}
          type={type}
          setType={setType}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          price={price}
          setPrice={setPrice}
        />

        <p className="mb-8 text-slate-600">
          Showing{" "}
          <span className="font-bold">
            {filteredProperties.length}
          </span>{" "}
          properties
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="rounded-2xl bg-white py-20 text-center shadow">
            <h3 className="text-2xl font-bold">
              No properties found
            </h3>

            <p className="mt-3 text-slate-500">
              Try changing your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}