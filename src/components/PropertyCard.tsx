type PropertyCardProps = {
  image: string;
  title: string;
  location: string;
  price: string;
};

export default function PropertyCard({
  image,
  title,
  location,
  price,
}: PropertyCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">
          {title}
        </h3>

        <p className="mb-3 text-slate-500">
          {location}
        </p>

        <p className="mb-5 text-2xl font-bold text-amber-500">
          KES {price}
        </p>

        <button className="w-full rounded-xl bg-slate-900 py-3 text-white hover:bg-slate-800">
          View Property
        </button>
      </div>
    </div>
  );
}