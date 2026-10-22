
import { BookOpen, MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">
            <BookOpen size={32} />
          </span>

          <span>
            <strong>EAK International School</strong>
            <small>Learn · Grow · Build Tomorrow</small>
          </span>
        </a>

        <div className="footer-contact">
          <p>
            <MapPin size={17} />
            123 Education Lane, Hyderabad, Telangana
          </p>

          <p>
            <Phone size={17} />
            +91 98765 43210
          </p>

          <p>
            <Mail size={17} />
            admissions@eakschool.edu.in
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2027 EAK International School. All rights reserved.
        </span>
        <a href="#home">Back to top ↑</a>
      </div>

      <p className="sample-note footer-note">
        School details shown here are illustrative.
      </p>
    </footer>
  );
}

export default Footer;
