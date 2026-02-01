import { useEffect, useRef, useState } from 'react';
import { Code, Briefcase, Award } from 'lucide-react';

function Stat({ icon, value, label, delay }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value.replace(/\D/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className={`text-center p-6 rounded-2xl glass transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-accent text-white">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
        {count}{value.replace(/[0-9]/g, '')}
      </div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0">
                <img
                  src="/about-image.jpg"
                  alt="Muhammad Bilal - Front-End Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-orange-500/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-2xl -z-10 opacity-80" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-8 px-6 py-3 glass rounded-xl">
                <div className="text-sm font-medium text-white/80">Based in</div>
                <div className="text-lg font-bold text-white">Faisalabad, PK</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-white/70">About Me</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Passionate Developer{' '}
              <span className="text-gradient">Creating Digital</span>{' '}
              Experiences
            </h2>

            {/* Description */}
            <div className="space-y-4 text-white/60 leading-relaxed mb-8">
              <p>
                I'm a passionate Front-End Developer with a strong foundation in modern 
                web technologies. Currently pursuing my Bachelor's in Software Engineering 
                at The University of Faisalabad, I combine academic knowledge with practical 
                experience to create exceptional digital experiences.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites 
                work, which evolved into a deep passion for creating intuitive and 
                visually stunning user interfaces. I believe in writing clean, maintainable 
                code and staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-full hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Stat
                icon={<Code size={24} />}
                value="3+"
                label="Years Experience"
                delay={0}
              />
              <Stat
                icon={<Briefcase size={24} />}
                value="15+"
                label="Projects Done"
                delay={100}
              />
              <Stat
                icon={<Award size={24} />}
                value="2"
                label="Companies"
                delay={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}