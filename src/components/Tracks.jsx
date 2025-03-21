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

