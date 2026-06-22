export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <p className="mb-4 tracking-[0.3em] text-amber-400 uppercase">
            Premier Real Estate Solutions
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Find. Buy. Rent.
            <br />
            We Manage.
          </h1>

          <p className="mb-8 text-lg text-slate-200 md:text-xl">
            Comprehensive real estate solutions across residential
            sales, property management, and short-term rental services.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600">
              Browse Properties
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}