import { useParams } from "react-router-dom";
import { properties } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return <h2>Property Not Found</h2>;
  }

  return (
    <section className="page">
      <div className="container">
        <img
          src={property.image}
          alt={property.title}
          className="property-banner"
        />

        <h1>{property.title}</h1>

        <h2>KES {property.price}</h2>

        <p>{property.description}</p>
      </div>
    </section>
  );
}