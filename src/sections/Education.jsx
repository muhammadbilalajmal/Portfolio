import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    institution: "Student's Inn College of Science & Commerce",
    degree: 'FSc (Pre-Engineering)',
    period: '2020 - 2022',
    location: 'Faisalabad, Pakistan',
    description:
      'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry. Built a strong analytical and problem-solving foundation that prepared me for a career in technology.',
  },
  {
    institution: 'The University of Faisalabad',
    degree: 'BS Software Engineering',
    period: '2022 - 2026',
    location: 'Faisalabad, Pakistan',
    description:
      'Currently pursuing a Bachelor of Science in Software Engineering, focusing on modern software development practices, web technologies, and software architecture.',
  },
];

function TimelineItem({ item, index, isLast }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex-col lg:gap-8`}
    >
      {/* Content Card */}
      <div
        className={`flex-1 w-full transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div className="p-6 md:p-8 rounded-2xl glass hover:border-orange-500/30 transition-all duration-300 group">
          {/* Institution */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors">
                {item.institution}
              </h3>
              <p className="text-lg font-medium text-orange-400">{item.degree}</p>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/60">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-orange-500" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-orange-500" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Timeline Center */}
      <div className="hidden lg:flex flex-col items-center">
        {/* Dot */}
        <div
          className={`w-5 h-5 rounded-full bg-gradient-accent border-4 border-black z-10 transition-all duration-500 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionDelay: `${index * 200 + 300}ms` }}
        />
        {/* Line */}
        {!isLast && (
          <div
            className={`w-0.5 bg-gradient-to-b from-orange-500 to-purple-500 transition-all duration-1000 ${
              isVisible ? 'h-32' : 'h-0'
            }`}
            style={{ transitionDelay: `${index * 200 + 500}ms` }}
          />
        )}
      </div>

      {/* Empty Space for Alternating Layout */}
      <div className="hidden lg:block flex-1" />
    </div>
  );
}

export default function Education() {
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
      id="education"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="text-sm text-white/70">Education</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Academic</span> Journey
          </h2>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">
            Education has been the foundation of my career. Here's a look at my 
            academic background and the qualifications I've earned along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-purple-500" />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-0">
            {educationData.map((item, index) => (
              <TimelineItem
                key={item.institution}
                item={item}
                index={index}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}