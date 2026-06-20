export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Prime Estate</h3>

          <p>
            Comprehensive real estate solutions provider
            serving residential sales, property management
            and short-term rentals.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Properties</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>

          <p>Mombasa, Kenya</p>
          <p>info@primeestate.co.ke</p>
          <p>+254 700 000 000</p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Prime Estate.
        All Rights Reserved.
      </div>
    </footer>
  );
}