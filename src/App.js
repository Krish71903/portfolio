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
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased scroll-smooth">
      <Navbar />
      <Hero />
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">About Me</h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          CS student at [Your School]. I code, I debug, I conquer—passionate about building impactful tech.
        </p>
      </section>
      <section id="projects" className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Projects</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} desc={p.desc} link={p.link} />
          ))}
        </div>
      </section>
      <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <p className="mt-4 text-lg text-center">
          Email: <a href="mailto:you@email.com" className="text-blue-400 hover:underline">you@email.com</a>
        </p>
      </section>
    </div>
  );
}

export default App;