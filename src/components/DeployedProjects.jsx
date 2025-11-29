import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { deployedProjects } from '../data/operatorData'
import './DeployedProjects.scss'

const DeployedProjects = () => {
  const renderProject = (project, index, baseDelay = 0) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: baseDelay + index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="deployed-projects__card"
    >
      <div className="deployed-projects__card-header">
        <span className="deployed-projects__code">PROJECT: {project.code}</span>
      </div>
      <h3 className="deployed-projects__name">{project.name}</h3>
      <p className="deployed-projects__class">
        <span className="deployed-projects__class-label">CLASS:</span> {project.class}
      </p>
      {project.status && (
        <p className="deployed-projects__status">
          <span className="deployed-projects__status-label">STATUS:</span> {project.status}
        </p>
      )}
      {project.objective && (
        <p className="deployed-projects__objective">
          <span className="deployed-projects__objective-label">OBJECTIVE:</span> {project.objective}
        </p>
      )}
      {project.features && (
        <p className="deployed-projects__features">
          <span className="deployed-projects__features-label">FEATURES:</span> {project.features}
        </p>
      )}
      {project.scope && (
        <p className="deployed-projects__scope">
          <span className="deployed-projects__scope-label">SCOPE:</span> {project.scope}
        </p>
      )}
      {project.fullTitle && (
        <p className="deployed-projects__full-title">
          <span className="deployed-projects__full-title-label">FULL TITLE:</span> {project.fullTitle}
        </p>
      )}
      {project.output && (
        <p className="deployed-projects__output">
          <span className="deployed-projects__output-label">OUTPUT:</span> {project.output}
        </p>
      )}
      {project.utility && (
        <p className="deployed-projects__utility">
          <span className="deployed-projects__utility-label">UTILITY:</span> {project.utility}
        </p>
      )}
      {project.stack && (
        <div className="deployed-projects__stack">
          <span className="deployed-projects__stack-label">STACK:</span>
          {project.stack.map((tech, techIndex) => (
            <span key={techIndex} className="deployed-projects__stack-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
      {project.tech && (
        <p className="deployed-projects__tech">
          <span className="deployed-projects__tech-label">TECH:</span> {project.tech}
        </p>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="deployed-projects__link"
        >
          VIEW BLUEPRINT <ExternalLink size={16} />
        </a>
      )}
    </motion.div>
  )

  return (
    <section id="projects" className="deployed-projects">
      <div className="deployed-projects__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="deployed-projects__title"
        >
          BLUEPRINTS
        </motion.h2>

        {/* Critical - Ongoing */}
        {deployedProjects.critical.ongoing.length > 0 && (
          <div className="deployed-projects__section">
            <h3 className="deployed-projects__section-title">CRITICAL // ONGOING</h3>
            <div className="deployed-projects__grid">
              {deployedProjects.critical.ongoing.map((project, index) => 
                renderProject(project, index, 0.1)
              )}
            </div>
          </div>
        )}

        {/* Critical - Finished */}
        {deployedProjects.critical.finished.length > 0 && (
          <div className="deployed-projects__section">
            <h3 className="deployed-projects__section-title">CRITICAL // FINISHED</h3>
            <div className="deployed-projects__grid">
              {deployedProjects.critical.finished.map((project, index) => 
                renderProject(project, index, 0.2)
              )}
            </div>
          </div>
        )}

        {/* Non-Critical - Finished */}
        {deployedProjects.nonCritical.finished.length > 0 && (
          <div className="deployed-projects__section">
            <h3 className="deployed-projects__section-title">NON-CRITICAL // FINISHED</h3>
            <div className="deployed-projects__grid">
              {deployedProjects.nonCritical.finished.map((project, index) => 
                renderProject(project, index, 0.3)
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DeployedProjects

