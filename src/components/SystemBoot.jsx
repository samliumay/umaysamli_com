import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './SystemBoot.scss'

const SystemBoot = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [progress, setProgress] = useState(0)

  const bootSequence = [
    '> CHECKING_INTEGRITY... OK',
    '> ESTABLISHING_UPLINK (MIT_SECURE_NODE_01)...',
    '> DECRYPTING_BIOMETRICS: UMAY_ŞAMLI...',
    '> CLEARANCE_LEVEL: WORLD_ATOMIC... VERIFIED.',
    '> WELCOME, OPERATOR.'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < bootSequence.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setProgress(100)
            setTimeout(() => {
              onComplete()
            }, 500)
          }, 500)
          return prev
        }
      })
    }, 800)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) {
          return prev + 10
        }
        return prev
      })
    }, 300)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="system-boot"
      >
        <div className="system-boot__container">
          <div className="system-boot__terminal">
            {bootSequence.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: index <= currentLine ? 1 : 0,
                  x: index <= currentLine ? 0 : -20
                }}
                transition={{ duration: 0.3 }}
                className="system-boot__line"
              >
                {line}
                {index === currentLine && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="system-boot__cursor"
                  >
                    _
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
          <div className="system-boot__progress">
            <div className="system-boot__progress-bar">
              <motion.div
                className="system-boot__progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="system-boot__progress-text">{progress}%</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SystemBoot

