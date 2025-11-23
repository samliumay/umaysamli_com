import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import './App.scss'

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 64 // Navigation bar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__content">
            <div className="nav__logo">Umay Şamlı</div>
            <div className="nav__links">
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('experience')}>Experience</button>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
              <button onClick={() => scrollToSection('references')}>References</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h1 className="hero__title">Computer Scientist</h1>
            <p className="hero__subtitle">
              I am specializing at AI Security, Reinforcement Learning and SCADA Security.
            </p>
            <div className="hero__buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="btn btn--primary"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn btn--secondary"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="section section--alt">
        <div className="section__container">
          <div className="about__container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section__title">About Me</h2>
              <p className="about__text">
                I am a Computer Scientist focusing on AI Security, Reinforcement Learning, and SCADA Security, currently pursuing an MS at TED University (GPA 4.0). With a background ranging from securing NATO's cloud infrastructure to developing full-stack pathology platforms, I combine deep theoretical knowledge with rigorous engineering discipline.
              </p>
              <div className="about__stats">
                <div className="about__stat">
                  <h3 className="about__stat-value">GPA 4.0</h3>
                  <p className="about__stat-label">MS Computer Science</p>
                </div>
                <div className="about__stat">
                  <h3 className="about__stat-value">High Honor</h3>
                  <p className="about__stat-label">BS Computer Engineering</p>
                </div>
                <div className="about__stat">
                  <h3 className="about__stat-value">References</h3>
                  <p className="about__stat-label">Oxford University & NATO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Journey - Git Commit History Style Timeline */}
      <section id="experience" className="section">
        <div className="section__container">
          <div className="timeline__container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section__title">Professional Journey</h2>
              
              {/* Single Column Timeline - All items in one flow */}
              <div className="timeline">
                {/* Professional Experience Items First */}
                {[
                  {
                    type: "experience",
                    date: "Nov 2025 - Present",
                    title: "Lead Software Engineer",
                    company: "TegraMind/OTDefend",
                    location: "Ankara, TR",
                    description: "Developed Front-end (React, SCSS, TS), Developed middle layer with Spring, Did network related side with Go. Containerize the services with Docker and manages with Kubernetes.",
                    stack: ["React", "SCSS", "TypeScript", "Spring", "Go", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Snort", "Elastic Search", "OSI Layer", "SCADA Protocols", "Nginx"]
                  },
                  {
                    type: "experience",
                    date: "May 2025 - Nov 2025",
                    title: "Cyber Security Engineer",
                    company: "NATO",
                    location: "Brussels, BE",
                    description: "Defined demo zero-trust architecture. Did cloud deployment architecture, Wrote Cloud security controls, Defined control system regulations for Software Based security tools. Academically research Data-in-use security at Cloud. Worked on NITRO CPU.",
                    stack: ["Zero-Trust", "DoD", "NIST", "Google Cloud", "AWS", "Cloud Security", "CSA - CCM", "Archimate", "GitHub", "Jira"]
                  },
                  {
                    type: "experience",
                    date: "Jan 2025 - Apr 2025",
                    title: "Lead Software Engineer",
                    company: "HistoCan",
                    location: "Ankara, TR",
                    description: "Wrote all stack of the platform and deployed it to cloud environment. I lead all software team and did the tests of the platform by myself.",
                    stack: ["React", "SCSS", "Contabo", "Git", "GitHub", "CUDA", "Spring", "PostgreSQL", "Nginx", "Postman"]
                  },
                  {
                    type: "experience",
                    date: "Nov 2024 - Dec 2024",
                    title: "Cyber Security Engineer",
                    company: "NATO",
                    location: "Mons, BE",
                    description: "Updated CIS Accreditation authorities security controls. Did them adaptable for cloud systems and AI systems. Did incident response for classic security and cyber security issues. Did risk assessment for 2 different situations. Prepared scripts for automated PII detection pipelines. Decreased PII detection time by 90%.",
                    stack: ["MITRE ATLAS", "ISO 27001", "NIST 800-53", "ISO 27005", "JIRA", "Splunk", "Nexus", "NIST AI RMF", "Mingard", "PyRIT", "NIST Cloud Architecture", "Python", "regex"]
                  },
                  {
                    type: "experience",
                    date: "Nov 2024 - Dec 2024",
                    title: "Software Engineer",
                    company: "TAI",
                    location: "Ankara, TR",
                    description: "Created a system to control all Factory PLC's automatic analysis and incident detection and production lines. Automated controlling pipelines for PLCs and alarm system for any incident. Increased output by 15%.",
                    stack: ["Node.JS", "Bootstrap", "JS/HTML/CSS", "Azure", "kepserverEX", "OSI Layer", "Multi-Thread", "Postman"]
                  },
                  {
                    type: "experience",
                    date: "Jul 2022 - Aug 2022",
                    title: "Software Engineer",
                    company: "ASELSAN",
                    location: "Ankara, TR",
                    description: "Write a program for automated worker scheduling. Decreased the required time for workers 50%.",
                    stack: ["C#", ".NET", "MongoDB"]
                  },
                  {
                    type: "experience",
                    date: "Jul 2021 - Sep 2021",
                    title: "Software Engineer",
                    company: "Savronik",
                    location: "Ankara, TR",
                    description: "Developed an automated train testing system. Decreased testing time by 50%.",
                    stack: ["Java", "JavaFX", "PostgreSQL", "Docker", "Multi-Thread"]
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={`exp-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="timeline__item timeline__item--experience"
                  >
                    <div className="timeline__date">
                      <span className="timeline__date-text">{item.date}</span>
                    </div>
                    <div className="timeline__branch">
                      <div className="timeline__node timeline__node--experience"></div>
                    </div>
                    <div className="timeline__content">
                      <div className="timeline__card">
                        <h3 className="timeline__title">{item.title}</h3>
                        <p className="timeline__company">{item.company} {item.location && `| ${item.location}`}</p>
                        <p className="timeline__description">{item.description}</p>
                        <div className="timeline__stack">
                          {item.stack.map((tech, techIdx) => (
                            <span key={techIdx} className="timeline__tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Education Items Second */}
                {[
                  {
                    type: "education",
                    date: "Sept 2025 - Jun 2027",
                    title: "MS in Computer Science",
                    company: "TED University",
                    description: "GPA: 4.0/4.0 (Full Scholarship). Focus on Explainable AI & RL.",
                    details: "Focus: Explainable AI, Reinforcement Learning, AI Red-Teaming"
                  },
                  {
                    type: "education",
                    date: "Jan 2023 - Present",
                    title: "Member & Founder",
                    company: "CyberTEDU",
                    companyLink: "https://www.cybertedu.com.tr/",
                    description: "TED University Cybersecurity Community",
                    details: ""
                  },
                  {
                    type: "education",
                    date: "Sept 2019 - Jun 2023",
                    title: "BS in Computer Engineering",
                    company: "TED University",
                    companyLink: "https://github.com/samliumay/fhr",
                    description: "GPA: 3.8/4.0 (High Honor Student, Top 10 at 150 students of CS). BS finishing project: ML Based Dehazing.",
                    details: ""
                  },
                  {
                    type: "education",
                    date: "Sept 2021 - Jun 2023",
                    title: "Secondary Field: Applied Data Science",
                    company: "TED University",
                    companyLink: "https://github.com/samliumay/ROOAPSEA",
                    description: "GPA: 4.0/4.0. Research to find optimal airline passenger satisfaction for the crew. Team members: Baran Akın, Serdar Hoşver.",
                    details: ""
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={`edu-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (6 + idx) * 0.1 }}
                    className="timeline__item timeline__item--education"
                  >
                    <div className="timeline__date">
                      <span className="timeline__date-text">{item.date}</span>
                    </div>
                    <div className="timeline__branch">
                      <div className="timeline__node timeline__node--education"></div>
                    </div>
                    <div className="timeline__content">
                      <div className="timeline__card">
                        <span className="timeline__date-mobile">{item.date}</span>
                        <h3 className="timeline__title">{item.title}</h3>
                        {item.companyLink ? (
                          <p className="timeline__company">
                            <a 
                              href={item.companyLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ color: 'inherit', textDecoration: 'none' }}
                              onMouseEnter={(e) => e.target.style.color = '#10b981'}
                              onMouseLeave={(e) => e.target.style.color = 'inherit'}
                            >
                              {item.company} <ExternalLink style={{ marginLeft: '0.25rem', width: '0.875rem', height: '0.875rem', display: 'inline-block', verticalAlign: 'middle' }} />
                            </a>
                          </p>
                        ) : (
                          <p className="timeline__company">{item.company}</p>
                        )}
                        <p className="timeline__description">{item.description}</p>
                        {item.details && (
                          <p className="timeline__details">{item.details}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section section--alt">
        <div className="section__container">
          <div className="section__container" style={{ maxWidth: '1280px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section__title">Featured Projects</h2>
              <div className="projects__grid">
                {[
                  {
                    title: "TPF (Tactical Planning Framework)",
                    description: "An ADHD-optimized Life Operating System using a custom 'Realism Point' algorithm (RP = RT/FreeTime) to prevent burnout.",
                    tech: ["React", "Spring Boot", "PostgreSQL", "Docker"],
                    link: "https://github.com/samliumay/tactical_planing_framework"
                  },
                  {
                    title: "FHR (Vision Research)",
                    description: "ML-based de-hazing algorithm platform for computer vision researchers.",
                    tech: ["Python", "PyTorch", "Computer Vision"],
                    link: "https://github.com/samliumay/fhr"
                  },
                  {
                    title: "React Integration of GPT",
                    description: "Bring Claude's Artifacts feature to ChatGPT.",
                    tech: ["React", "SCSS", "Git", "Groq", "Ollama", "Azure OpenAI"],
                    link: "https://github.com/samliumay/chatgpt-integration-react"
                  }
                ].map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="projects__card"
                  >
                    <h3 className="projects__title">{project.title}</h3>
                    <p className="projects__description">{project.description}</p>
                    <div className="projects__tech">
                      {project.tech.map((t, i) => (
                        <span key={i} className="projects__tech-tag">{t}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__link"
                      >
                        View on GitHub <ExternalLink style={{ marginLeft: '0.25rem', width: '1rem', height: '1rem', display: 'inline-block' }} />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="section">
        <div className="section__container">
          <div className="testimonials__container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section__title">References</h2>
              
              {/* References with PDFs - Vertical Layout */}
              <div className="testimonials__list testimonials__list--vertical">
                {[
                  {
                    name: "Burak Ekici",
                    title: "Senior Researcher at Oxford",
                    email: "burak.ekici@cs.ox.ac.uk",
                    phone: "+44 779 636 59 51",
                    referenceLink: "https://github.com/samliumay/samliumay/blob/main/CVs_and_Letters/Recommendation%20and%20Reference%20Letters/Reference%20Letter%20-%20Burak%20Ekici%20-%20University%20of%20Oxford.pdf",
                    quote: "Umay consistently demonstrated exceptional knowledge... Strong theoretical foundation, analytical skills, and problem-solving abilities."
                  },
                  {
                    name: "Holger Spohn",
                    title: "CISO, Head of Operational IT & AIM - Candriam (worked at SHAPE together)",
                    email: "spohni@aol.com / Holger.SPOHN@shape.nato.int",
                    phone: "Contact via email or reference letter",
                    referenceLink: "https://github.com/samliumay/samliumay/blob/main/CVs_and_Letters/Recommendation%20and%20Reference%20Letters/Reference%20Letter%20-%20Holger%20Spohn-%20NATO.pdf",
                    quote: "The coding and technical skills are superb... An engaged team player, smart, and always willing to tackle new challenges."
                  },
                  {
                    name: "Ulas Gulec",
                    title: "CEO at Simovate / Assistant Professor at TED University / Project Consultant at Simsoft",
                    email: "ulas.gulec@tedu.edu.tr",
                    phone: "+90 535 765 60 01",
                    referenceLink: "https://github.com/samliumay/samliumay/blob/main/CVs_and_Letters/Recommendation%20and%20Reference%20Letters/Reference%20Letter%20-%20Ulas%20Gulec%20-%20TED%20University.pdf",
                    quote: "His writing, research, and analytical thought skills are truly exceptional. He has the ability to analyze a problem and formulate a solution."
                  },
                  {
                    name: "Emin Kuğu",
                    title: "Assistant Professor at TED University",
                    email: "emin.kugu@tedu.edu.tr",
                    phone: "+90 530 692 27 83",
                    referenceLink: "https://github.com/samliumay/samliumay/blob/main/CVs_and_Letters/Recommendation%20and%20Reference%20Letters/Reference%20Letter%20-%20Emin%20KUGU%20-%20TED%20University.pdf",
                    quote: "Displays a unique leadership for teamwork... Whatever work he does, he tries to do it thoroughly and with dedication."
                  }
                ].map((ref, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="testimonials__card"
                  >
                    {ref.quote && (
                      <p className="testimonials__quote">"{ref.quote}"</p>
                    )}
                    <div style={{ marginTop: ref.quote ? '1rem' : '0' }}>
                      <p className="testimonials__author">{ref.name}</p>
                      <p className="testimonials__title">{ref.title}</p>
                      <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                        <p style={{ margin: '0.25rem 0' }}>
                          <strong>Email:</strong> <a href={`mailto:${ref.email.split(' / ')[0]}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{ref.email}</a>
                        </p>
                        <p style={{ margin: '0.25rem 0' }}>
                          <strong>Phone:</strong> {ref.phone}
                        </p>
                        {ref.referenceLink && (
                          <p style={{ margin: '0.25rem 0' }}>
                            <strong>Reference Letter:</strong>{' '}
                            <a 
                              href={ref.referenceLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ color: '#3b82f6', textDecoration: 'none' }}
                            >
                              View PDF <ExternalLink style={{ marginLeft: '0.25rem', width: '0.75rem', height: '0.75rem', display: 'inline-block', verticalAlign: 'middle' }} />
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* References without PDFs - Horizontal Layout */}
              <div className="testimonials__list testimonials__list--horizontal">
                {[
                  {
                    name: "Andrea Accetta",
                    title: "Head of Cyber Operations at SHAPE - NATO",
                    email: "cybersec.itanavy@yahoo.com",
                    phone: "+32 490 49 99 63",
                    referenceLink: null,
                    quote: null
                  },
                  {
                    name: "Kadri Yetis",
                    title: "Chief Technology Officer, VP of Software Engineering, MS",
                    email: "usamli@yahoo.com",
                    phone: "+90 533 454 17 99",
                    referenceLink: null,
                    quote: null
                  },
                  {
                    name: "Leo Fehmi Aslan",
                    title: "Senior Cyber Security Analyst at NATO/NCIA",
                    email: "fehmiaslan38@gmail.com",
                    phone: "+34 649 99 84 12",
                    referenceLink: null,
                    quote: null
                  },
                  {
                    name: "Luke O'Brien",
                    title: "Senior Cyber Security Engineer - NATO/CDT",
                    email: "OBrien.Luke@hq.nato.int / Luke.OBrien@devops.ncia.nato.int",
                    phone: "+44 7975 94 86 98",
                    referenceLink: null,
                    quote: null
                  }
                ].map((ref, idx) => (
                  <motion.div
                    key={`no-pdf-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="testimonials__card"
                  >
                    <div>
                      <p className="testimonials__author">{ref.name}</p>
                      <p className="testimonials__title">{ref.title}</p>
                      <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                        <p style={{ margin: '0.25rem 0' }}>
                          <strong>Email:</strong> <a href={`mailto:${ref.email.split(' / ')[0]}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{ref.email}</a>
                        </p>
                        <p style={{ margin: '0.25rem 0' }}>
                          <strong>Phone:</strong> {ref.phone}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section--alt">
        <div className="section__container">
          <div className="contact__container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section__title">Contact</h2>
              <p className="contact__subtitle">
                Let's connect! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="contact__methods">
                <motion.a
                  href="mailto:samliumay965@gmail.com"
                  className="contact__method"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="contact__icon" />
                  <div className="contact__info">
                    <h3 className="contact__method-title">Email</h3>
                    <p className="contact__method-value">samliumay965@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/umaysamli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__method"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="contact__icon" />
                  <div className="contact__info">
                    <h3 className="contact__method-title">LinkedIn</h3>
                    <p className="contact__method-value">linkedin.com/in/umaysamli</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://github.com/samliumay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__method"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="contact__icon" />
                  <div className="contact__info">
                    <h3 className="contact__method-title">GitHub</h3>
                    <p className="contact__method-value">github.com/samliumay</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
      <div>
              <p className="footer__copyright">© 2025 Umay Şamlı. Built with React & SCSS.</p>
            </div>
            <div className="footer__social">
              <a
                href="https://github.com/samliumay"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <Github style={{ width: '1.5rem', height: '1.5rem' }} />
        </a>
              <a
                href="https://linkedin.com/in/umaysamli"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <Linkedin style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
              <a
                href="mailto:samliumay965@gmail.com"
                className="footer__social-link"
                aria-label="Email"
              >
                <Mail style={{ width: '1.5rem', height: '1.5rem' }} />
        </a>
      </div>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App
