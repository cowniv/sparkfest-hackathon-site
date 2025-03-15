import useCountdown from '../hooks/useCountdown.js'
import { EVENT_START } from '../data.js'

function TimeBox({ value, label }) {
  return (
    <div className="timebox">
      <strong>{String(value).padStart(2, '0')}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function Hero() {
  const { days, hours, minutes, seconds, done } = useCountdown(EVENT_START)

  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="eyebrow">A one-week hackathon for the SDGs</p>
        <h1>Spark ideas. <br /> Build for good.</h1>
        <p className="hero-text">
          Form a team, pick a Sustainable Development Goal, and ship a working prototype in seven days.
        </p>
        <p className="practice-note">Independent UI/UX practice rebuild. Event details below are retained as a portfolio demonstration.</p>
        {done ? (
          <p className="event-status" role="status">Sparkfest 2025 has concluded. Explore the archived event flow below.</p>
        ) : (
          <div className="countdown" aria-label="Countdown to kickoff">
            <TimeBox value={days} label="days" />
            <TimeBox value={hours} label="hours" />
            <TimeBox value={minutes} label="mins" />
            <TimeBox value={seconds} label="secs" />
          </div>
        )}
        <div className="hero-actions">
          <a href="#register" className="btn">Try the registration demo</a>
          <a href="#tracks" className="btn btn-ghost">See the tracks</a>
        </div>
      </div>
    </section>
  )
}
