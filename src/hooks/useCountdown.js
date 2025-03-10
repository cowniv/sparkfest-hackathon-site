import { useEffect, useState } from 'react'

export function getRemaining(target, now = Date.now()) {
  const diff = Math.max(0, new Date(target).getTime() - now)
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  }
}

// Ticks every second until the target date is reached.
export default function useCountdown(target) {
  const [time, setTime] = useState(() => getRemaining(target))

  useEffect(() => {
    if (time.done) return
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target, time.done])

  return time
}
