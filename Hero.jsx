
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";

function Hero({ onEnquire }) {
  return (
  <section className="hero" id="home">
  <div className="hero-content">
    <span className="section-tag">
      Admissions Open 2027–28
    </span>

    <h1>
      Shaping Bright Minds for a
      <span> Brighter Future</span>
    </h1>

    <p>
      Discover an inspiring learning environment where
      curiosity grows, confidence develops, and every
      student is encouraged to achieve their potential.
    </p>

   <div className="hero-buttons">
  <button
    className="primary-btn"
    onClick={onEnquire}
  >
    Apply for Admission →
  </button>

  <a href="#programs" className="secondary-btn">
    Explore Programs
  </a>
</div>
  </div>

  <div className="hero-image">
    <img
      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
      alt="Students learning in a classroom"
    />
  </div>
</section>
    
  );
}

export default Hero;
