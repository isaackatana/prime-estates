export default function About() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-6 text-5xl font-bold">
          About Prime Estate
        </h1>

        <p className="max-w-3xl text-lg text-slate-600">
          Prime Estate is a comprehensive real estate
          solutions provider serving clients across
          residential sales, property management,
          and short-term rental services.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Our Mission
            </h2>

            <p className="text-slate-600">
              To provide exceptional real estate
              services built on trust, professionalism,
              and results.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Our Vision
            </h2>

            <p className="text-slate-600">
              To become East Africa's most trusted
              real estate solutions provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}