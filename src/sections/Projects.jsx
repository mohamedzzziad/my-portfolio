const projects = [
  {
    name: "MedicalPulse Graduation Project",
    description: "A medical service web app helping patients self-diagnose and find doctors using AI, React.js, Node.js, SQL.",
    link: "#"
  },
  {
    name: "OWASP Juice Shop Pentest",
    description: "Hands-on web application penetration testing, vulnerabilities exploitation and report documentation.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-background px-6 py-12">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">Projects & Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map(({ name, description, link }) => (
          <div key={name} className="bg-black/30 border border-white/10 rounded-lg p-6 hover:scale-105 transform transition">
            <h3 className="text-secondary font-semibold text-xl mb-2">{name}</h3>
            <p className="text-muted mb-4">{description}</p>
            <a href={link} className="text-primary hover:text-secondary underline">
              View Details
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
