type ProjectProps = {
    title: string;
    description: string;
    tech: string[];
    link?: string;
  };
  
  export default function ProjectCard({ title, description, tech, link }: ProjectProps) {
    return (
      <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <div className="text-xs text-gray-500 mt-2">
          {tech.join(", ")}
        </div>
        {link && (
          <a href={link} target="_blank" className="text-blue-600 text-sm mt-2 inline-block hover:underline">
            View Project →
          </a>
        )}
      </div>
    );
  }
  