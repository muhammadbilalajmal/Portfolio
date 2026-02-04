import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    company: 'Career Institute',
    role: 'Front-End Developer',
    period: 'June 2024 - September 2024',
    location: 'Faisalabad, Pakistan',
    description:
      'Worked as a Front-End Developer, focusing on creating responsive and user-friendly web interfaces. Collaborated with the design team to implement pixel-perfect UI components and ensured cross-browser compatibility.',
    achievements: [
      'Developed responsive web interfaces using HTML, CSS, and JavaScript',
      'Collaborated with design team to implement pixel-perfect UI components',
      'Optimized website performance and loading speeds',
      'Ensured cross-browser compatibility for all major browsers',
      'Gained hands-on experience with modern front-end workflows',
      'Implemented version control using Git for team collaboration',
    ],
  },
  {
    company: 'CSoft',
    role: 'Front-End Developer',
    period: 'June 2025 - September 2025',
    location: 'Faisalabad, Pakistan',
    description:
      'Built dynamic user interfaces with React.js, implementing state management and component-based architecture. Worked with REST APIs to integrate backend services and participated in agile development processes.',
    achievements: [
      'Built dynamic user interfaces with React.js and modern hooks',
      'Implemented state management using React Context and Redux',
      'Integrated REST APIs for seamless backend communication',
      'Participated in code reviews and agile development processes',
      'Enhanced application performance through optimization techniques',
      'Applied modern React patterns including custom hooks and HOCs',
    ],
  },
];

function ExperienceCard({ experience, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="p-6 md:p-8 rounded-2xl glass hover:border-orange-500/30 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center">
              <Briefcase size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {experience.company}
              </h3>
              <p className="text-lg font-medium text-orange-400">
                {experience.role}
              </p>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full">
              <Calendar size={14} className="text-orange-500" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full">
              <MapPin size={14} className="text-orange-500" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className={`space-y-3 ${isExpanded ? '' : 'line-clamp-3'}`}>
          <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            Key Achievements
          </h4>
          {experience.achievements.map((achievement, i) => (
            <div
              key={i}
              className="flex items-start gap-3 text-white/70"
            >
              <CheckCircle
                size={18}
                className="flex-shrink-0 text-orange-500 mt-0.5"
              />
              <span className="text-sm leading-relaxed">{achievement}</span>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        {experience.achievements.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>

      {/* Connector Line (except for last item) */}
      {index < experiences.length - 1 && (
        <div className="hidden md:block absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-orange-500/50 to-purple-500/50" />
      )}
    </div>
  );
}

export default function Experience() {
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
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm text-white/70">Experience</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">
            My professional journey has equipped me with valuable experience 
            in building modern web applications and working with diverse teams.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}