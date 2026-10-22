
import { testimonials } from "../data/schoolData";

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="section-heading">
        <div>
          <span className="section-tag">PARENT STORIES</span>
          <h2>What Parents Say</h2>
        </div>
        <p>Building trust through learning and partnership.</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((person) => (
          <article className="testimonial-card" key={person.name}>
            <div className="avatar">{person.initial}</div>

            <div className="stars" aria-label="Demo rating">
              ★★★★★
            </div>

            <p>“{person.text}”</p>
            <strong>{person.name}</strong>
            <small>{person.grade}</small>
          </article>
        ))}
      </div>

      <p className="sample-note">
        Fictional testimonials for demonstration purposes.
      </p>
    </section>
  );
}

export default Testimonials;
