import {
  BedDouble,
  Bath,
  Ruler,
  MapPin,
} from "lucide-react";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    status: string;
    image: string;
  };
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white">
          {property.status}
        </span>

        <span className="absolute right-5 top-5 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur">
          {property.type}
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">
          {property.title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-slate-500">
          <MapPin size={18} />
          {property.location}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">

          <div>
            <BedDouble className="mx-auto mb-2 text-amber-500" />
            <p className="font-semibold">{property.bedrooms}</p>
            <span className="text-sm text-slate-500">
              Bedrooms
            </span>
          </div>

          <div>
            <Bath className="mx-auto mb-2 text-amber-500" />
            <p className="font-semibold">{property.bathrooms}</p>
            <span className="text-sm text-slate-500">
              Bathrooms
            </span>
          </div>

          <div>
            <Ruler className="mx-auto mb-2 text-amber-500" />
            <p className="font-semibold">{property.size}m²</p>
            <span className="text-sm text-slate-500">
              Area
            </span>
          </div>

        </div>

        <div className="mt-8 flex items-center justify-between">

          <div>
            <p className="text-sm text-slate-500">
              Starting From
            </p>

            <h2 className="text-3xl font-bold text-[#0c3638]">
              KSh {property.price.toLocaleString()}
            </h2>
          </div>

          <button className="rounded-xl bg-[#0c3638] px-6 py-3 font-semibold text-white transition hover:bg-amber-500">
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}