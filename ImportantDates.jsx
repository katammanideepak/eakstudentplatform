
import { CalendarDays } from "lucide-react";
import { importantDates } from "../data/schoolData";

function ImportantDates() {
  return (
    <section className="info-card">
      <h3>
        <CalendarDays size={19} />
        Important Dates
      </h3>

      {importantDates.map((item) => (
        <div className="date-row" key={item.event}>
          <span>{item.event}</span>
          <strong>{item.date}</strong>
        </div>
      ))}

      <p className="sample-note">
        Sample dates. Please verify with the school.
      </p>
    </section>
  );
}

export default ImportantDates;
