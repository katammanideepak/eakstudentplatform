
import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";

function Navbar({ onEnquire }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "why-us"],
    ["Programs", "programs"],
    ["Facilities", "facilities"],
    ["Admissions", "admissions"],
    ["Fees", "fees"],
    ["FAQ", "faq"],
    ["Contact", "contact"],
  ];

  return (
    <header className="navbar">
      <a
        className="brand"
        href="#home"
        onClick={() => setMenuOpen(false)}
      >
        <span className="brand-icon">
          <BookOpen size={30} />
        </span>

        <span>
          <strong>EAK International School</strong>
          <small>Learn · Grow · Build Tomorrow</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map(([label, id]) => (
          <a
            key={label}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}

        <button
          className="btn btn-primary nav-cta"
          onClick={() => {
            setMenuOpen(false);
            onEnquire();
          }}
        >
          Apply Now
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
