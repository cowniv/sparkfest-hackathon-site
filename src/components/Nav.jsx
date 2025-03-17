import { useEffect, useState } from 'react'
import { SECTIONS } from '../data.js'
import useScrollSpy from '../hooks/useScrollSpy.js'

const ids = SECTIONS.map((s) => s.id)

export default function Nav() {
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
