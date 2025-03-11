import { useEffect, useState } from 'react'

// Returns the id of the section currently in the middle of the screen.
export default function useScrollSpy(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
