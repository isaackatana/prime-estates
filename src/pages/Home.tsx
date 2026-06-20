import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>

          <div className="service-grid">
            <div className="service-card">
              <h3>Property Sales</h3>
              <p>
                Helping clients buy and sell residential properties with
                confidence.
              </p>
            </div>

            <div className="service-card">
              <h3>Property Management</h3>
              <p>
                Full-service management solutions for landlords and investors.
              </p>
            </div>

            <div className="service-card">
              <h3>Short-Term Rentals</h3>
              <p>
                Airbnb and vacation rental management that maximizes returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div>
              <h2>100+</h2>
              <p>Properties Managed</p>
            </div>

            <div>
              <h2>200+</h2>
              <p>Happy Clients</p>
            </div>

            <div>
              <h2>10+</h2>
              <p>Years Experience</p>
            </div>

            <div>
              <h2>24/7</h2>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}