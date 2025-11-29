import { motion } from 'framer-motion'
import { references } from '../data/operatorData'
import './References.scss'

const References = () => {
  return (
    <section id="references" className="references">
      <div className="references__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="references__title"
        >
          OFFICER_EVALUATIONS
        </motion.h2>

        <div className="references__grid">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="references__log-entry"
            >
              <div className="references__log-header">
                <span className="references__log-entry-code">{ref.logEntry}</span>
                <span className="references__source">// {ref.name}</span>
              </div>
              <p className="references__title">
                <span className="references__title-label">TITLE:</span> {ref.title}
              </p>
              <p className="references__contact">
                <span className="references__contact-label">EMAIL:</span> {ref.email}
              </p>
              <p className="references__contact">
                <span className="references__contact-label">PHONE:</span> {ref.phone}
              </p>
              {ref.pdfLink && (
                <a
                  href={ref.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="references__pdf-link"
                >
                  VIEW REFERENCE LETTER PDF
                </a>
              )}
              <blockquote className="references__quote">"{ref.quote}"</blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References

