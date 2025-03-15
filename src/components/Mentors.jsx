import Section from './Section.jsx'
import { MENTORS } from '../data.js'

const initials = (name) => name.split(' ').map((n) => n[0]).join('')

export default function Mentors() {
  return (
    <Section id="mentors" title="Mentor roles" subtitle="Illustrative profiles for this independent practice rebuild.">
      <div className="grid">
        {MENTORS.map((m) => (
          <div key={m.name} className="mentor">
