export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-background"
    >
      {/* Photo placeholder */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-primary to-secondary flex-shrink-0 mb-6 md:mb-0"></div>

      {/* Intro text */}
      <div className="md:ml-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Hi, I’m Mohamed Ziad
        </h1>
        <p className="text-muted mb-6 max-w-md">
          I’m a Penetration Tester passionate about ethical hacking, security research, and building creative security solutions.
        </p>

        {/* Social links */}
        <div className="flex justify-center md:justify-start gap-4 mb-6">
          <a href="https://github.com/melrahwan85" target="_blank" className="text-muted hover:text-primary transition">GitHub</a>
          <a href="https://www.linkedin.com/in/melrahwan85" target="_blank" className="text-muted hover:text-primary transition">LinkedIn</a>
          <a href="https://www.hackthebox.eu" target="_blank" className="text-muted hover:text-primary transition">HTB</a>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex justify-center md:justify-start gap-4">
          <a href="#projects" className="bg-primary text-background px-5 py-2 rounded font-semibold hover:bg-secondary transition">
            View Projects
          </a>
          <a href="/resume.pdf" className="border border-primary px-5 py-2 rounded font-semibold hover:bg-primary hover:text-background transition">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
