import { motion } from 'framer-motion'
import { operatorProfile } from '../data/operatorData'
import './OperatorProfile.scss'

const OperatorProfile = () => {
  return (
    <section id="operator" className="operator-profile">
      <div className="operator-profile__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="operator-profile__content"
        >
          <div className="operator-profile__header">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="operator-profile__id"
            >
              {operatorProfile.id}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="operator-profile__class"
            >
              {operatorProfile.class}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="operator-profile__clearance"
            >
              CLEARANCE: <span className="operator-profile__clearance-level">{operatorProfile.clearanceLevel}</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="operator-profile__directive"
          >
            <h2 className="operator-profile__directive-label">DIRECTIVE:</h2>
            <p className="operator-profile__directive-text">{operatorProfile.directive}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="operator-profile__tactical-focus"
          >
            <h2 className="operator-profile__tactical-focus-label">TACTICAL FOCUS (TAGS):</h2>
            <div className="operator-profile__tags">
              {operatorProfile.tacticalFocus.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="operator-profile__tag"
                >
                  [{tag}]
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OperatorProfile

