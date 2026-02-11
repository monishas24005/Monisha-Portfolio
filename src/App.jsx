import React, { useState } from "react";
import {
  Menu, X, Github, Linkedin, Mail, Phone,
  ExternalLink, Code, Database, Terminal
} from "lucide-react";
import "./App.css";


// ---------------- NAVBAR ----------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About", "Education", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed w-full bg-slate-900/70 backdrop-blur-xl text-white z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <div className="font-bold text-xl tracking-widest bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            MONISHA S
          </div>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 transition">
                {link}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-4">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-slate-300 hover:text-blue-400">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};


// ---------------- HERO ----------------
const Hero = () => (
  <section id="about" className="relative bg-slate-950 text-white min-h-screen flex items-center pt-20 overflow-hidden">

    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />

    <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
      <div>
        <p className="text-blue-400 mb-3">👋 Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Monisha S</h1>
        <h2 className="text-2xl text-slate-300 mb-6">Computer Science Student & Java Developer</h2>

        <p className="text-slate-400 mb-8 max-w-lg">
          Passionate about building intelligent systems and modern web apps.
          I love turning ideas into real software solutions.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="px-7 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:scale-105 transition">
            View Projects
          </a>
          <a href="#contact" className="px-7 py-3 border border-slate-600 rounded-lg hover:bg-slate-800 transition">
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-70 group-hover:opacity-100 transition"></div>
          <img src="profile.jpeg" alt="Profile"
            className="relative w-72 h-72 object-cover rounded-full border-4 border-slate-900 shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
);


// ---------------- EDUCATION ----------------
const Education = () => {
  const educationData = [
    { institution: "Panimalar Engineering College", degree: "B.E CSE", year: "2026", score: "CGPA 8.6", icon: <Code /> },
    { institution: "Govt Model School", degree: "HSC", year: "2022", score: "86.16%", icon: <Terminal /> },
    { institution: "Govt High School", degree: "SSLC", year: "2020", score: "83.40%", icon: <Database /> },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {educationData.map((edu, i) => (
          <div key={i} className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition border border-white/40 text-center">
            <div className="mb-4 text-blue-600">{edu.icon}</div>
            <h3 className="font-bold">{edu.institution}</h3>
            <p className="text-blue-600">{edu.degree}</p>
            <p className="text-sm text-slate-500">{edu.year}</p>
            <span className="inline-block mt-3 px-3 py-1 bg-slate-100 rounded-full text-sm">{edu.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
};


// ---------------- SKILLS ----------------
const Skills = () => {
  const skills = ["Java", "JavaScript", "React", "SQL", "PostgreSQL", "Git", "HTML", "CSS"];

  return (
    <section id="skills" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 px-6">
        {skills.map((skill, i) => (
          <span key={i} className="px-6 py-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full text-sm font-semibold hover:from-blue-100 hover:to-cyan-100 transition shadow">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};


// ---------------- PROJECTS ----------------
const Projects = () => (
  <section id="projects" className="py-20 bg-slate-50">
    <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:-translate-y-3 transition">
        <h3 className="text-xl font-bold mb-3">Automated Depression Prediction</h3>
        <p className="text-slate-600 mb-4">ML model using NLP & CatBoost.</p>
        <span className="text-green-600 font-semibold">95% Accuracy</span>
      </div>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:-translate-y-3 transition">
        <h3 className="text-xl font-bold mb-3">Java & Web Dev Repo</h3>
        <a href="https://github.com/monishas24005" target="_blank" rel="noreferrer"
          className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg mt-4">
          <Github size={18} className="mr-2" /> GitHub
        </a>
      </div>

    </div>
  </section>
);


// ---------------- CONTACT ----------------
const Contact = () => (
  <section id="contact" className="py-20 bg-slate-900 text-white text-center">
    <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
    <div className="flex justify-center gap-10">
      <a href="mailto:monishas24005@gmail.com"><Mail /></a>
      <div className="flex flex-col items-center">
        <Phone /><p className="text-sm font-bold ">+91 90437 55274</p>
      </div>
      
      <a href="https://www.linkedin.com/in/monisha-s-8bbb1a28a"><Linkedin /></a>
    </div>
  </section>
);


// ---------------- FOOTER ----------------
const Footer = () => (
  <footer className="bg-slate-950 text-center py-6 text-slate-500">
    © {new Date().getFullYear()} Monisha S
  </footer>
);


// ---------------- MAIN APP ----------------
function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
