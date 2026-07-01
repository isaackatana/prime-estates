import villa1 from "../assets/properties/villa1.jpg";
import villa2 from "../assets/properties/villa2.jpg";
import apartment1 from "../assets/properties/apartment1.jpg";
import apartment2 from "../assets/properties/apartment2.jpg";
import house1 from "../assets/properties/house1.jpg";
import house2 from "../assets/properties/house2.jpg";

export const properties = [
  {
    id: 1,
    title: "Luxury Beach Villa",
    location: "Diani",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    size: 420,
    price: 45000000,
    status: "For Sale",
    image: villa1,
    description:
      "Experience luxury beachfront living in this stunning villa featuring spacious interiors, a private swimming pool, landscaped gardens, and direct beach access.",
    features: [
      "Swimming Pool",
      "Beach Access",
      "Garden",
      "Ocean View",
      "Parking",
      "24/7 Security",
    ],
  },
  {
    id: 2,
    title: "Modern Ocean Apartment",
    location: "Diani",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    size: 145,
    price: 12500000,
    status: "For Sale",
    image: apartment1,
    description:
      "A stylish apartment with panoramic ocean views, modern finishes, spacious balconies, and premium amenities.",
    features: [
      "Balcony",
      "Ocean View",
      "Elevator",
      "Gym",
      "Parking",
      "Security",
    ],
  },
  {
    id: 3,
    title: "Family House",
    location: "Mombasa",
    type: "House",
    bedrooms: 3,
    bathrooms: 2,
    size: 240,
    price: 18500000,
    status: "For Sale",
    image: house1,
    description:
      "Perfect family home located in a peaceful neighborhood with a spacious compound and modern interiors.",
    features: [
      "Garden",
      "Parking",
      "Security",
      "Water Storage",
      "Solar Water Heater",
    ],
  },
  {
    id: 4,
    title: "Holiday Villa",
    location: "Diani",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 5,
    size: 520,
    price: 65000000,
    status: "For Rent",
    image: villa2,
    description:
      "Luxury holiday villa with breathtaking ocean views, private pool, entertainment area, and beautifully landscaped gardens.",
    features: [
      "Private Pool",
      "Ocean View",
      "BBQ Area",
      "Beach Access",
      "WiFi",
      "Parking",
    ],
  },
  {
    id: 5,
    title: "Executive Apartment",
    location: "Nyali",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    size: 180,
    price: 21000000,
    status: "For Sale",
    image: apartment2,
    description:
      "Elegant executive apartment in Nyali offering spacious rooms, modern finishes, and easy access to shopping and beaches.",
    features: [
      "Swimming Pool",
      "Gym",
      "Parking",
      "Elevator",
      "Security",
    ],
  },
  {
    id: 6,
    title: "Garden Family Home",
    location: "Nyali",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    size: 310,
    price: 27000000,
    status: "For Sale",
    image: house2,
    description:
      "Beautiful family home with lush gardens, spacious living areas, and excellent access to schools and shopping centers.",
    features: [
      "Garden",
      "Parking",
      "Solar Power",
      "Security",
      "Water Tank",
    ],
  },
];