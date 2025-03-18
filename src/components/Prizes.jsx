import Section from './Section.jsx'
import { PRIZES } from '../data.js'

export default function Prizes() {
  return (
    <Section id="prizes" title="Prize layout" subtitle="Illustrative tiers used to demonstrate the event-page design.">
      <div className="prizes">
        {PRIZES.map((p, i) => (
          <div key={p.place} className={i === 0 ? 'prize featured' : 'prize'}>
            <h3>{p.place}</h3>
