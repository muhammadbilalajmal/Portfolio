import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization and intuitive user interface.',
    image: '/project1.jpg',
    technologies: ['React', 'Tailwind CSS', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.',
    image: '/project2.jpg',
    technologies: ['React', 'JavaScript', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website Generator',
    description:
      'A tool that helps developers create stunning portfolio websites with customizable templates and real-time preview features.',
    image: '/project3.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Weather Application',
    description:
      'A responsive weather app with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.',
    image: '/project4.jpg',
    technologies: ['JavaScript', 'API Integration', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description:
      'A full-featured blogging platform with markdown support, comments system, and social sharing capabilities.',
    image: '/project5.jpg',
    technologies: ['React', 'SQL', 'Bootstrap'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Code Snippet Manager',
    description:
      'A developer tool for organizing, searching, and sharing code snippets with syntax highlighting and categorization.',
    image: '/project6.jpg',
    technologies: ['React', 'Tailwind CSS', 'Local Storage'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

function ProjectCard({ project, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl overflow-hidden glass transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-400 ${
            isHovered ? 'opacity-90' : 'opacity-0'
          }`}
        />

        {/* Hover Content */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-400 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-accent rounded-full hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github size={14} />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Border Glow on Hover */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255, 107, 53, 0.5), 0 0 20px rgba(255, 107, 53, 0.2)',
        }}
      />
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-sm text-white/70">Portfolio</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">
            Here are some of my recent projects that showcase my skills and 
            experience in building modern web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-full hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}