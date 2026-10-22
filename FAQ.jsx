
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/schoolData";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="faq-intro">
        <span className="section-tag">NEED TO KNOW?</span>
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common admission questions.</p>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article className="faq-item" key={item.question}>
              <button
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
              >
                {item.question}
                <ChevronDown
                  size={19}
                  className={isOpen ? "rotate" : ""}
                />
              </button>

              {isOpen && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
