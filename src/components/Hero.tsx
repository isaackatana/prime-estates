export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="container hero-content">
          <span>PREMIER REAL ESTATE SOLUTIONS</span>

          <h1>
            Find. Buy. Rent.
            <br />
            We Manage.
          </h1>

          <p>
            Comprehensive real estate solutions across residential sales,
            property management, and short-term rental services.
          </p>

          <div className="hero-buttons">
            <button>Browse Properties</button>
            <button className="secondary">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}