export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-background px-6 py-12">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">Contact</h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-secondary font-semibold mb-2">Email</h3>
          <p className="text-muted">melrahwan85@gmail.com</p>
        </div>
        <div>
          <h3 className="text-secondary font-semibold mb-2">Phone</h3>
          <p className="text-muted">+201206499721</p>
        </div>
        <div>
          <h3 className="text-secondary font-semibold mb-2">Social</h3>
          <p className="text-muted">
            <a href="https://github.com/melrahwan85" className="hover:text-primary">GitHub</a> / 
            <a href="https://linkedin.com/in/melrahwan85" className="hover:text-primary"> LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}
