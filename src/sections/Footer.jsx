import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    href: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    href: 'https://linkedin.com',
  },
  {
    name: 'Twitter',
    icon: <Twitter size={20} />,
    href: 'https://twitter.com',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    href: 'mailto:programmer3133@gmail.com',
  },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block text-3xl font-bold mb-4"
            >
              <span className="text-gradient">Muhammad Bilal</span>
            </a>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Front-End Developer passionate about creating beautiful, 
              functional web applications that make a difference. Let's 
              build something amazing together.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-accent transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:programmer3133@gmail.com"
                  className="text-white/60 hover:text-orange-400 transition-colors"
                >
                  programmer3133@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923247633297"
                  className="text-white/60 hover:text-orange-400 transition-colors"
                >
                  0324-7633-297
                </a>
              </li>
              <li className="text-white/60">
                Faisalabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Bilal. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-accent text-white flex items-center justify-center shadow-lg shadow-orange-500/25 transition-all duration-300 z-50 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}