export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Client Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <p>
              "Prime Estate helped us sell our home
              quickly and professionally."
            </p>

            <h4 className="mt-6 font-bold">
              John M.
            </h4>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <p>
              "Excellent property management service."
            </p>

            <h4 className="mt-6 font-bold">
              Sarah K.
            </h4>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <p>
              "Highly recommend their short-term
              rental solutions."
            </p>

            <h4 className="mt-6 font-bold">
              David O.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}