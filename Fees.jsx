
import { fees } from "../data/schoolData";

function Fees() {
  return (
    <section className="section" id="fees">
      <div className="section-heading">
        <div>
          <span className="section-tag">PLAN AHEAD</span>
          <h2>Fee Information</h2>
        </div>
        <p>Review the sample fee structure below.</p>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Grade</th>
              <th>Annual Fee</th>
              <th>Admission Fee</th>
            </tr>
          </thead>

          <tbody>
            {fees.map((item) => (
              <tr key={item.grade}>
                <td>{item.grade}</td>
                <td>{item.annual}</td>
                <td>{item.admission}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="sample-note">
        These are illustrative fees, not verified school fees.
      </p>
    </section>
  );
}

export default Fees;
