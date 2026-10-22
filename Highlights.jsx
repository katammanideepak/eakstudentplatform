import { Star, Users, Building2, Trophy } from "lucide-react";
import { highlights } from "../data/schoolData";

const icons = [Star, Users, Building2, Users, Trophy, Building2];

function Highlights() {
  return (
    <section className="section highlights-section">
      <div className="section-heading">
        <div>
          <span className="section-tag">OUR IMPACT</span>
          <h2>School Highlights</h2>
        </div>
      </div>

      <div className="highlight-grid">
        {highlights.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <article className="highlight-card" key={item.label}>
              <Icon size={27} />
              <strong>{item.number}</strong>
              <span>{item.label}</span>
            </article>
          );
        })}
      </div>

      <p className="sample-note">
        Illustrative statistics for this demonstration.
      </p>
    </section>
  );
}

export default Highlights;