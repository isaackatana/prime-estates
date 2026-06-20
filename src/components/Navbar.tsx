import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <h2>PRIME ESTATE</h2>
          <span>Premier Real Estate Solutions</span>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="consult-btn">
          Book Consultation
        </button>
      </div>
    </header>
  );
}