import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Shield } from 'lucide-react'
import { encryptedComms } from '../data/operatorData'
import './EncryptedComms.scss'

const EncryptedComms = () => {
  return (
    <section id="comms" className="encrypted-comms">
      <div className="encrypted-comms__container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="encrypted-comms__title"
        >
          COMMS_UPLINK
        </motion.h2>

        {/* Secure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="encrypted-comms__section"
        >
          <h3 className="encrypted-comms__section-title">SECURE</h3>
          <div className="encrypted-comms__grid">
            <motion.a
              href={`mailto:${encryptedComms.secureEmail}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="encrypted-comms__channel encrypted-comms__channel--secure"
            >
              <Shield size={32} className="encrypted-comms__icon" />
              <div className="encrypted-comms__info">
                <span className="encrypted-comms__label">ENCRYPTED CHANNEL</span>
                <span className="encrypted-comms__value">{encryptedComms.secureEmail}</span>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Insecure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="encrypted-comms__section"
        >
          <h3 className="encrypted-comms__section-title">INSECURE</h3>
          <div className="encrypted-comms__grid">
            <motion.a
              href={`mailto:${encryptedComms.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="encrypted-comms__channel"
            >
              <Mail size={32} className="encrypted-comms__icon" />
              <div className="encrypted-comms__info">
                <span className="encrypted-comms__label">EMAIL</span>
                <span className="encrypted-comms__value">{encryptedComms.email}</span>
              </div>
            </motion.a>

            <motion.a
              href={`https://www.${encryptedComms.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="encrypted-comms__channel"
            >
              <Linkedin size={32} className="encrypted-comms__icon" />
              <div className="encrypted-comms__info">
                <span className="encrypted-comms__label">LINKEDIN</span>
                <span className="encrypted-comms__value">{encryptedComms.linkedin}</span>
              </div>
            </motion.a>

            <motion.a
              href={`https://${encryptedComms.github}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="encrypted-comms__channel"
            >
              <Github size={32} className="encrypted-comms__icon" />
              <div className="encrypted-comms__info">
                <span className="encrypted-comms__label">GITHUB</span>
                <span className="encrypted-comms__value">{encryptedComms.github}</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EncryptedComms

