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
