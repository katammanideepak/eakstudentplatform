
import {
  Laptop,
  FlaskConical,
  Library,
  Trophy,
  Bus,
  HeartPulse,
  Utensils,
  Building2,
} from "lucide-react";

import { facilities } from "../data/schoolData";

const iconMap = {
  laptop: Laptop,
  flask: FlaskConical,
  library: Library,
  trophy: Trophy,
  bus: Bus,
  "heart-pulse": HeartPulse,
  utensils: Utensils,
  building: Building2,
};

function Facilities() {
  return (
    <section className="section" id="facilities">
      <div className="section-heading">
        <div>
          <span className="section-tag">CAMPUS LIFE</span>
          <h2>Our Facilities</h2>
        </div>
        <p>Facilities designed to support learning and growth.</p>
      </div>

      <div className="facility-grid">
        {facilities.map((facility) => {
          const Icon = iconMap[facility.icon];

          return (
            <article className="facility-card" key={facility.name}>
              <img
                src={facility.image}
                alt={facility.name}
                loading="lazy"
              />
              <div>
                <Icon size={18} />
                <h3>{facility.name}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Facilities;
