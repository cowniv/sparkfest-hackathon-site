import { useState } from 'react'
import Section from './Section.jsx'
import { TRACKS, TRACK_FILTERS } from '../data.js'

function TrackCard({ track }) {
  return (
    <article className="track-card" style={{ '--track-color': track.color }}>
      <span className="sdg-badge" style={{ background: track.color }}>SDG {track.sdg}</span>
      <h3>{track.title}</h3>
      <p>{track.blurb}</p>
    </article>
  )
}

export default function Tracks() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? TRACKS : TRACKS.filter((t) => t.theme === filter)

  return (
    <Section id="tracks" title="Challenge Tracks" subtitle="Pick one SDG your team wants to tackle.">
      <div className="chips" role="group" aria-label="Filter challenge tracks">
        {TRACK_FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            className={filter === f.value ? 'chip active' : 'chip'}
            aria-pressed={filter === f.value}
