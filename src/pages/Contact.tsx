export default function Contact() {
  return (
    <section className="page">
      <div className="container">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <input type="tel" placeholder="Phone Number" />

          <textarea
            rows={6}
            placeholder="Tell us how we can help..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}