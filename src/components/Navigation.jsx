import { motion } from 'framer-motion'
import './Navigation.scss'

const Navigation = () => {
  const menuItems = [
    { id: '01', label: 'INTEL', section: 'operator' },
    { id: '02', label: 'OPS_LOG', section: 'operations' },
    { id: '03', label: 'ARSENAL', section: 'projects' },
    { id: '04', label: 'COMMS', section: 'comms' }
  ]

  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if (element) {
      const hudHeight = 60
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - hudHeight - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="nav-sidebar">
      <div className="nav-sidebar__container">
        <div className="nav-sidebar__header">
          <span className="nav-sidebar__title">LOADOUT</span>
        </div>
        <ul className="nav-sidebar__menu">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="nav-sidebar__item"
            >
              <button
                onClick={() => scrollToSection(item.section)}
                className="nav-sidebar__button"
              >
                <span className="nav-sidebar__id">[{item.id}]</span>
                <span className="nav-sidebar__label">// {item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

