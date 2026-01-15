const skills = [
  {
    domain: "Reconnaissance",
    points: [
      "OSINT gathering",
      "Footprinting",
      "Social engineering"
    ]
  },
  {
    domain: "Scanning & Enumeration",
    points: [
      "Port scanning with Nmap",
      "Service identification",
      "Vulnerability scanning"
    ]
  },
  {
    domain: "Exploitation",
    points: [
      "Metasploit payloads",
      "Manual exploitation",
      "Privilege escalation"
    ]
  },
  {
    domain: "Web Pentesting",
    points: [
      "SQL Injection",
      "XSS & IDOR",
      "File upload & SSRF"
    ]
  },
  {
    domain: "Wireless / IoT",
    points: [
      "Wi-Fi attacks",
      "IoT device assessment",
      "Bluetooth & Zigbee testing"
    ]
  },
  {
    domain: "Reporting & Documentation",
    points: [
      "Detailed pentest reports",
      "Screenshots & logs",
      "Recommendations"
    ]
  },
  {
    domain: "Tools & Techniques",
    points: [
      "Nmap, Metasploit, Ping",
      "Burp Suite, PortSwigger",
      "TryHackMe labs practice"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-background px-6 py-12">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">Skills & Domains</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skills.map(({ domain, points }) => (
          <div key={domain} className="bg-black/30 border border-white/10 rounded-lg p-6 hover:scale-105 transform transition">
            <h3 className="text-secondary font-semibold text-xl mb-4">{domain}</h3>
            <ul className="list-disc list-inside text-muted space-y-2">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
