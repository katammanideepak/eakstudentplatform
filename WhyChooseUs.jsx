
import {
  Users,
  Trophy,
  Building2,
  Heart,
  Dumbbell,
  ShieldCheck,
  Laptop,
  GraduationCap,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Qualified and supportive teachers.",
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "A strong focus on learning outcomes.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "Well-equipped classrooms and labs.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Learning beyond textbooks.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Activities",
    description: "Opportunities to discover new talents.",
  },
  {
    icon: ShieldCheck,
    title: "Student Safety",
    description: "A caring and secure learning environment.",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    description: "Technology-supported education.",
  },
  {
    icon: GraduationCap,
    title: "Future Ready",
    description: "Skills for higher education and careers.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="why-intro">
        <span className="section-tag">WHY EAK?</span>
        <h2>Why Choose EAK International School?</h2>
        <p>
          We aim to build confident, curious, responsible,
          and future-ready individuals.
        </p>
      </div>

      <div className="reasons-grid">
        {reasons.map(({ icon: Icon, title, description }) => (
          <article className="reason" key={title}>
            <span className="reason-icon">
              <Icon size={22} />
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
