
import { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

function EnquiryModal({ onClose }) {
  const [form, setForm] = useState({
    parent: "",
    email: "",
    phone: "",
    grade: "",
    visit: "Admission enquiry",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="enquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          aria-label="Close enquiry form"
          onClick={onClose}
          type="button"
        >
          <X />
        </button>

        <span className="section-tag">TAKE THE FIRST STEP</span>
        <h2 id="enquiry-title">Admission Enquiry</h2>

        {submitted ? (
          <div className="success-message">
            <CheckCircle2 size={36} />

            <h3>Thank you, {form.parent}!</h3>

            <p>
              Your enquiry has been submitted in this demo.
            </p>

            <small>
              No information was sent to a server.
            </small>

            <button
              className="btn btn-primary"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p>
              Fill in your details to learn more about admissions.
            </p>

            <form
              className="enquiry-form"
              onSubmit={handleSubmit}
            >
              <label>
                Parent / Guardian Name
                <input
                  type="text"
                  name="parent"
                  value={form.parent}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[0-9+() -]{8,18}"
                  placeholder="+91 98765 43210"
                  required
                />
              </label>

              <label>
                Grade Applying For
                <select
                  name="grade"
                  value={form.grade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a grade</option>

                  {Array.from({ length: 12 }, (_, index) => (
                    <option
                      key={index + 1}
                      value={`Grade ${index + 1}`}
                    >
                      Grade {index + 1}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                I Would Like To
                <select
                  name="visit"
                  value={form.visit}
                  onChange={handleChange}
                >
                  <option>Admission enquiry</option>
                  <option>Schedule a campus visit</option>
                  <option>Talk to admissions</option>
                </select>
              </label>

              <button
                className="btn btn-primary submit-btn"
                type="submit"
              >
                Submit Enquiry <Send size={17} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EnquiryModal;
