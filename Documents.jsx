
import { FileText, CheckCircle2 } from "lucide-react";
import { documents } from "../data/schoolData";

function Documents() {
  return (
    <section className="info-card">
      <h3>
        <FileText size={19} />
        Required Documents
      </h3>

      <ul className="document-list">
        {documents.map((document) => (
          <li key={document}>
            <CheckCircle2 size={17} />
            {document}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Documents;
