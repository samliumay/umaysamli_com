import './HUD.scss'

const HUD = ({ currentTime }) => {
  const formatTime = (date, timezone) => {
    const options = { 
      timeZone: timezone, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false
    }
    return date.toLocaleTimeString('en-US', options)
  }

  const getTimeZoneName = (timezone) => {
    const names = {
      'Europe/Istanbul': 'IST',
      'Europe/London': 'LON',
      'America/New_York': 'WAS',
      'Asia/Shanghai': 'BEI'
    }
    return names[timezone] || timezone
  }

  return (
    <div className="hud">
      <div className="hud__container">
        <div className="hud__item">
          <span className="hud__label">COORDS:</span>
          <span className="hud__value">CLASSIFIED</span>
        </div>
        <div className="hud__times">
          <div className="hud__time-item">
            <span className="hud__time-label">{getTimeZoneName('Europe/Istanbul')}:</span>
            <span className="hud__time-value">{formatTime(currentTime, 'Europe/Istanbul')}</span>
          </div>
          <div className="hud__time-item">
            <span className="hud__time-label">{getTimeZoneName('Europe/London')}:</span>
            <span className="hud__time-value">{formatTime(currentTime, 'Europe/London')}</span>
          </div>
          <div className="hud__time-item">
            <span className="hud__time-label">{getTimeZoneName('America/New_York')}:</span>
            <span className="hud__time-value">{formatTime(currentTime, 'America/New_York')}</span>
          </div>
          <div className="hud__time-item">
            <span className="hud__time-label">{getTimeZoneName('Asia/Shanghai')}:</span>
            <span className="hud__time-value">{formatTime(currentTime, 'Asia/Shanghai')}</span>
          </div>
        </div>
        <div className="hud__item">
          <span className="hud__label">NET_STATUS:</span>
          <span className="hud__value hud__value--secure">
            ENCRYPTED
            <span className="hud__status-dot"></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default HUD

