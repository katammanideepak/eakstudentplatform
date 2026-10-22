
import {
  GraduationCap,
  ArrowRight,
  Phone,
} from "lucide-react";

function FinalCTA({ onEnquire }) {
  return (
    <section className="final-cta">
      <div className="cta-decoration">
        <GraduationCap size={56} />
      </div>

      <span className="section-tag">
        A BRIGHTER TOMORROW BEGINS TODAY
      </span>

      <h2>Give Your Child a Future-Ready Education.</h2>

      <p>
        Discover a place where curiosity grows, confidence
        shines, and possibilities begin.
      </p>

      <div className="cta-actions">
        <button className="btn btn-gold" onClick={onEnquire}>
          Apply Now <ArrowRight size={17} />
        </button>

        <button className="btn-light-outline" onClick={onEnquire}>
          Book a Campus Visit
        </button>

        <a className="btn-light-outline" href="tel:+919876543210">
          <Phone size={16} />
          Talk to Admissions
        </a>
      </div>
    </section>
  );
}

export default FinalCTA;
