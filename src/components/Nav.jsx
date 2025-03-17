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
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Sparkfest home">spark<span>fest</span></a>
        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav
          id="primary-navigation"
