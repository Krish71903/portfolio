export default function ProjectCard({ title, desc, link }) {
    return (
      <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2">{desc}</p>
        <a href={link} className="text-blue-500 mt-2 block">View on GitHub</a>
      </div>
    );
  }