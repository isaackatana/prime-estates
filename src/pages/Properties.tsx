import { properties } from "../data/properties";

export default function Properties() {
  return (
    <section className="page">
      <div className="container">
        <h1>Available Properties</h1>

        <div className="property-grid">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={property.title} />

              <div className="property-content">
                <h3>{property.title}</h3>

                <p>{property.location}</p>

                <h4>KES {property.price}</h4>

                <button>View Property</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}