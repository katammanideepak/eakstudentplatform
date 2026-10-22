
import { programs } from "../data/schoolData";

function Programs() {
  return (
    <section className="section" id="programs">
      <div className="section-heading">
        <div>
          <span className="section-tag">LEARN AT EVERY STAGE</span>
          <h2>Our Academic Programs</h2>
        </div>
        <p>Learning pathways for every stage of growth.</p>
      </div>

      <div className="program-grid">
        {programs.map((program) => (
          <article
            className={`program-card ${program.color}`}
            key={program.title}
          >
            <span className="program-emoji">{program.icon}</span>
            <h3>{program.title}</h3>
            <span className="age">{program.age}</span>
            <p>{program.description}</p>

            <ul>
              {program.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Programs;
