import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
  const projects = [
    { title: "Minecraft Server", desc: "Hosted on Raspberry Pi 5", link: "https://github.com/yourusername/minecraft" },
    { title: "Torrent Client", desc: "Legal file downloader", link: "https://github.com/yourusername/torrent" },
    { title: "CLI Tool", desc: "Automates tasks", link: "https://github.com/yourusername/cli" },
  ];

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section id="about" className="about-section">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          CS student at [Your School]. I code, I debug, I conquer—passionate about building impactful tech.
        </p>
      </section>
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} desc={p.desc} link={p.link} />
          ))}
        </div>
      </section>
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-text">
          Email: <a href="mailto:you@email.com" className="contact-link">you@email.com</a>
        </p>
      </section>
    </div>
  );
}

export default App;