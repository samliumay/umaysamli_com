import { motion } from 'framer-motion'
import { academicDatabase } from '../data/operatorData'
import './AcademicDatabase.scss'

const AcademicDatabase = () => {
  return (
    <section id="academic" className="academic-database">
      <div className="academic-database__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="academic-database__title"
        >
          ACADEMIC_RECORD
        </motion.h2>

        <div className="academic-database__grid">
          {academicDatabase.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="academic-database__entry"
            >
              <h3 className="academic-database__type">{entry.type}</h3>
              <p className="academic-database__institution">| {entry.institution}</p>
              <p className="academic-database__performance">
                <span className="academic-database__performance-label">PERFORMANCE:</span> <strong>{entry.performance}</strong>
              </p>
              {entry.focus && (
                <p className="academic-database__focus">
                  <span className="academic-database__focus-label">FOCUS:</span> {entry.focus}
                </p>
              )}
              <p className="academic-database__period">{entry.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicDatabase

