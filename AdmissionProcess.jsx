
import { admissionSteps } from "../data/schoolData";

function AdmissionProcess() {
  return (
    <section className="section process-section" id="admissions">
      <div className="section-heading">
        <div>
          <span className="section-tag">YOUR JOURNEY STARTS HERE</span>
          <h2>Admission Process</h2>
        </div>
        <p>Five simple steps to begin your child's journey.</p>
      </div>

      <div className="process-grid">
        {admissionSteps.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span className="step-number">{index + 1}</span>
            {index < admissionSteps.length - 1 && (
              <span className="step-arrow">→</span>
            )}
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdmissionProcess;
