import './GreetingApp.css'

function GreetingApp() {
  const currentHour = new Date().getHours()
  let greeting = 'Good Night'
  let emoji = '🌙'
  let period = 'night'
  let subMessage = 'Time to wind down and relax.'

  if (currentHour >= 5 && currentHour <= 11) {
    greeting = 'Good Morning'
    emoji = '☀️'
    period = 'morning'
    subMessage = 'Hope your day starts with calm and energy.'
  } else if (currentHour >= 12 && currentHour <= 16) {
    greeting = 'Good Afternoon'
    emoji = '🌤️'
    period = 'afternoon'
    subMessage = 'Take a moment to recharge and smile.'
  } else if (currentHour >= 17 && currentHour <= 20) {
    greeting = 'Good Evening'
    emoji = '🌆'
    period = 'evening'
    subMessage = 'Enjoy the cozy glow of the evening.'
  }

  const currentTime = new Date().toLocaleTimeString()

  return (
    <div className={`page ${period}`}>
      <div className="card">
        <div className="emoji" aria-hidden="true">
          {emoji}
        </div>
        <h1>{greeting}</h1>
        <p className="time">{currentTime}</p>
        <p className="sub-message">{subMessage}</p>
      </div>
    </div>
  )
}

export default GreetingApp
