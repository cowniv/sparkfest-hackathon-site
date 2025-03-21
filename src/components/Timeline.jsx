import Section from './Section.jsx'
import { TIMELINE } from '../data.js'

export default function Timeline() {
  return (
    <Section id="timeline" title="The Week" subtitle="Seven days from idea to demo.">
      <ol className="timeline">
        {TIMELINE.map((item, i) => (
          <li key={item.day}>
            <span className="dot">{i + 1}</span>
            <div>
