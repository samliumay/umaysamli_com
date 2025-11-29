import { useState, useEffect } from 'react'
import SystemBoot from './SystemBoot'
import HUD from './HUD'
import Navigation from './Navigation'
import './Layout.scss'

const Layout = ({ children }) => {
  const [isBooted, setIsBooted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    if (isBooted) {
      const timer = setInterval(() => {
        setCurrentTime(new Date())
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isBooted])

  if (!isBooted) {
    return <SystemBoot onComplete={() => setIsBooted(true)} />
  }

  return (
    <div className="layout">
      <div className="layout__terminal-frame">
        {/* Grid overlay */}
        <div className="layout__grid-overlay" />
        
        {/* HUD Top Bar */}
        <HUD currentTime={currentTime} />
        
        {/* Main Content */}
        <div className="layout__content">
          <Navigation />
          <main className="layout__main">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout

