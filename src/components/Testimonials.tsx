import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Mwangi",
    role: "Property Investor",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Prime Estate made purchasing our investment property effortless. Their professionalism and market knowledge exceeded every expectation.",
  },
  {
    name: "Sarah K.",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "From the first viewing to closing day, the entire experience was seamless. I highly recommend Prime Estate to anyone buying or selling property.",
  },
  {
    name: "David Otieno",
    role: "Landlord",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "Their property management team handles everything professionally. I have complete peace of mind knowing my investment is in good hands.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-5 max-w-3xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-amber-500">
            Testimonials
          </p>
        </div>


        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <Quote
                className="absolute right-8 top-8 text-amber-400 opacity-20"
                size={55}
              />

              <div className="mb-6 flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{testimonial.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-amber-400"
                />

                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}