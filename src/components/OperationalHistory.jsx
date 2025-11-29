import { motion } from 'framer-motion'
import { operationalHistory } from '../data/operatorData'
import './OperationalHistory.scss'

const OperationalHistory = () => {
  return (
    <section id="operations" className="operational-history">
      <div className="operational-history__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="operational-history__title"
        >
          OPERATIONS_LOG
        </motion.h2>

        <div className="operational-history__timeline">
          {operationalHistory.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="operational-history__mission"
            >
              <div className="operational-history__mission-header">
                <span className="operational-history__status">[{mission.status}]</span>
                <span className="operational-history__organization">:: {mission.organization} ({mission.location})</span>
              </div>
              
              <div className="operational-history__mission-content">
                <p className="operational-history__role">
                  <span className="operational-history__role-label">ROLE:</span> {mission.role}
                </p>
                <p className="operational-history__status-badge">
                  <span className="operational-history__status-label">STATUS:</span> {mission.status === 'CURRENT' ? 'ACTIVE' : 'COMPLETED'} ({mission.period})
                </p>
                <p className="operational-history__brief">
                  <span className="operational-history__brief-label">BRIEF:</span> {mission.brief}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OperationalHistory

