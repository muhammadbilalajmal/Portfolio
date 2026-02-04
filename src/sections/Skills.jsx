import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML5', level: 95, icon: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z', color: '#e34c26' },
  { name: 'CSS3', level: 90, icon: 'M32 32l34.9 395.8L191.5 480l157.6-52.2L384 32H32zm262.8 334.9l-21.3 7.1-41.4 11.1-41.3-11.1-2.8-31.5h38.6l1.4 15.6 22.6 6.1 22.6-6.1 3.1-33.6h-71.3l-5.6-62.2h104.2l2.8-31.5H136.3l-3.1-31.5h212.6l-9.4 100.6z', color: '#264de4' },
  { name: 'JavaScript', level: 85, icon: 'M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.6c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 45.9 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z', color: '#f7df1e' },
  { name: 'React', level: 80, icon: 'M666.7 405.4l36.8 6.3c-6.7 37.8-20.3 71.1-40.7 99.6-20.4 28.5-45.6 50.3-75.5 65.4-29.9 15.1-63.3 22.6-100.2 22.6-36.9 0-70.3-7.5-100.2-22.6-29.9-15.1-55.1-36.9-75.5-65.4-20.4-28.5-34-61.8-40.7-99.6l36.8-6.3c5.7 31.3 17.3 58.8 34.8 82.5 17.5 23.7 39.3 41.9 65.4 54.6 26.1 12.7 54.9 19.1 86.4 19.1s60.3-6.4 86.4-19.1c26.1-12.7 47.9-30.9 65.4-54.6 17.5-23.7 29.1-51.2 34.8-82.5zM512 326.4c-21.7 0-39.3-17.6-39.3-39.3s17.6-39.3 39.3-39.3 39.3 17.6 39.3 39.3-17.6 39.3-39.3 39.3z m0-278c21.7 0 39.3 17.6 39.3 39.3s-17.6 39.3-39.3 39.3-39.3-17.6-39.3-39.3 17.6-39.3 39.3-39.3z m0 556c-21.7 0-39.3-17.6-39.3-39.3s17.6-39.3 39.3-39.3 39.3 17.6 39.3 39.3-17.6 39.3-39.3 39.3zM405.4 345.3l-6.3-36.8c37.8-6.7 71.1-20.3 99.6-40.7 28.5-20.4 50.3-45.6 65.4-75.5 15.1-29.9 22.6-63.3 22.6-100.2 0-36.9-7.5-70.3-22.6-100.2-15.1-29.9-36.9-55.1-65.4-75.5-28.5-20.4-61.8-34-99.6-40.7l6.3-36.8c41.7 7.3 78.4 22.6 110.1 45.9 31.7 23.3 56.4 52.3 74.1 87 17.7 34.7 28.2 73 31.5 114.9 3.3 41.9-2.6 82.1-17.7 120.6-15.1 38.5-37.8 72.1-68.1 100.8-30.3 28.7-66.1 49.4-107.4 62.1z m-210.8 0c-41.3-12.7-77.1-33.4-107.4-62.1-30.3-28.7-53-62.3-68.1-100.8-15.1-38.5-21-78.7-17.7-120.6 3.3-41.9 13.8-80.2 31.5-114.9 17.7-34.7 42.4-63.7 74.1-87 31.7-23.3 68.4-38.6 110.1-45.9l6.3 36.8c-37.8 6.7-71.1 20.3-99.6 40.7-28.5 20.4-50.3 45.6-65.4 75.5-15.1 29.9-22.6 63.3-22.6 100.2 0 36.9 7.5 70.3 22.6 100.2 15.1 29.9 36.9 55.1 65.4 75.5 28.5 20.4 61.8 34 99.6 40.7l-6.3 36.8z', color: '#61dafb' },
  { name: 'Bootstrap', level: 90, icon: 'M333.5 202.3c0-22.4-15.3-34.7-43.2-34.7h-50.4v71.9h51.4c28.4 0 42.2-12.1 42.2-37.2zm-126.5 213.2v-152h73.9c38.2 0 62.1 19.6 62.1 52.6 0 34.4-24.5 54.3-65.4 54.3h-70.6zM512 48v416H48V48h464zm-272.5 330.2c41.8 0 74.6-16.9 92.3-46.3 14.3-23.2 18.4-50.4 18.4-82.9 0-61.3-28.9-99.8-84.8-99.8h-96.9v228.5h70.6l.4.5z', color: '#7952b3' },
  { name: 'Tailwind CSS', level: 85, icon: 'M128 32C57.3 32 0 89.3 0 160c0 49.8 28.4 92.9 70 115.8-7.7 29-32.1 50.2-61.3 50.2-6.1 0-12.1-.9-17.8-2.6C-5.6 324.5-12 330.3-12 337.5c0 7.8 6.3 14.2 14.2 14.2 49.8 0 92.9-28.4 115.8-70 7.7 29 32.1 50.2 61.3 50.2 6.1 0 12.1-.9 17.8-2.6 6.4-1.6 12.8-7.4 12.8-14.6 0-7.8-6.3-14.2-14.2-14.2-49.8 0-92.9-28.4-115.8-70 7.7-29 32.1-50.2 61.3-50.2 6.1 0 12.1.9 17.8 2.6 6.4 1.6 12.8 7.4 12.8 14.6 0 7.8-6.3 14.2-14.2 14.2-49.8 0-92.9 28.4-115.8 70-7.7-29-32.1-50.2-61.3-50.2-6.1 0-12.1.9-17.8 2.6C-5.6 163.5-12 169.3-12 176.5c0 7.8 6.3 14.2 14.2 14.2 49.8 0 92.9 28.4 115.8 70zM384 32c-70.7 0-128 57.3-128 128 0 49.8 28.4 92.9 70 115.8-7.7 29-32.1 50.2-61.3 50.2-6.1 0-12.1-.9-17.8-2.6-6.4-1.6-12.8-7.4-12.8-14.6 0-7.8 6.3-14.2 14.2-14.2 49.8 0 92.9-28.4 115.8-70 7.7 29 32.1 50.2 61.3 50.2 6.1 0 12.1-.9 17.8-2.6 6.4-1.6 12.8-7.4 12.8-14.6 0-7.8-6.3-14.2-14.2-14.2-49.8 0-92.9-28.4-115.8-70 7.7-29 32.1-50.2 61.3-50.2 6.1 0 12.1.9 17.8 2.6 6.4 1.6 12.8 7.4 12.8 14.6 0 7.8-6.3 14.2-14.2 14.2-49.8 0-92.9 28.4-115.8 70-7.7-29-32.1-50.2-61.3-50.2-6.1 0-12.1.9-17.8 2.6-6.4 1.6-12.8 7.4-12.8 14.6 0 7.8 6.3 14.2 14.2 14.2 49.8 0 92.9-28.4 115.8-70z', color: '#06b6d4' },
  { name: 'SQL', level: 75, icon: 'M472.1 270.5l-6.8 61.5c-1.1 10.2 7.5 18.8 17.6 17.6l61.5-6.8c10.2-1.1 17.4-10.3 14.3-20.1L523.1 186c-3.1-9.8-14.3-14.9-23.6-10.5l-33.3 15.3c-9.3 4.3-13.8 15.3-10.5 24.9l16.4 55zM416 256c0-88.4-71.6-160-160-160S96 167.6 96 256s71.6 160 160 160 160-71.6 160-160zM256 416c-88.4 0-160-71.6-160-160 0-88.4 71.6-160 160-160s160 71.6 160 160-71.6 160-160 160z', color: '#f29111' },
  { name: 'Git', level: 80, icon: 'M216.3 76.5c-26.7-26.7-70.1-26.7-96.8 0l-43 43-43-43c-26.7-26.7-70.1-26.7-96.8 0s-26.7 70.1 0 96.8l43 43-43 43c-26.7 26.7-26.7 70.1 0 96.8s70.1 26.7 96.8 0l43-43 43 43c26.7 26.7 70.1 26.7 96.8 0s26.7-70.1 0-96.8l-43-43 43-43c26.7-26.7 26.7-70.1 0-96.8zM167.9 360.4l-43-43 43-43 43 43-43 43zm0-207.6l-43-43 43-43 43 43-43 43z', color: '#f05032' },
];

function SkillCard({ skill, index }) {
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
      className={`group relative p-6 rounded-2xl glass transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-14 h-14 mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-110 rotate-6' : ''
          }`}
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <svg
            viewBox="0 0 512 512"
            className="w-8 h-8"
            fill={skill.color}
          >
            <path d={skill.icon} />
          </svg>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-white mb-3">{skill.name}</h3>

        {/* Progress Bar */}
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              backgroundColor: skill.color,
            }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-2 text-right">
          <span className="text-sm font-medium" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="text-sm text-white/70">My Skills</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Technologies I{' '}
            <span className="text-gradient">Work With</span>
          </h2>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">
            I've worked with a variety of technologies in the web development world. 
            Here are the tools and frameworks I'm most proficient with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}