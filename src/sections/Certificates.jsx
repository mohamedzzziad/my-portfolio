const certificates = [
  { name: "CEH", link: "#" },
  { name: "eJPT", link: "#" },
  { name: "eCPPT", link: "#" },
  { name: "CompTIA Security+", link: "#" },
  { name: "CompTIA Network+", link: "#" },
  { name: "CompTIA Linux+", link: "#" }
];

export default function Certificates() {
  return (
    <section id="certificates" className="min-h-screen bg-background px-6 py-12">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">Certificates</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {certificates.map(({ name, link }) => (
          <a
            key={name}
            href={link}
            className="bg-black/30 border border-white/10 px-6 py-4 rounded-lg text-muted hover:text-primary transition"
          >
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
