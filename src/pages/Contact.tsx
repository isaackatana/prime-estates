export default function Contact() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Contact Us
        </h1>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border p-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border p-4"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-xl border p-4"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full rounded-xl border p-4"
          />

          <button className="w-full rounded-xl bg-slate-950 py-4 text-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}