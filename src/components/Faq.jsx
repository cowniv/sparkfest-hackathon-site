import { useId, useState } from 'react'
import Section from './Section.jsx'
import { FAQS } from '../data.js'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)
  const baseId = useId()

  return (
    <Section id="faq" title="FAQ">
      <div className="faq">
        {FAQS.map((item, i) => {
          const open = openIndex === i
          const triggerId = `${baseId}-question-${i}`
          const panelId = `${baseId}-answer-${i}`
          return (
            <div key={item.q} className={open ? 'faq-item open' : 'faq-item'}>
              <button
                id={triggerId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                {item.q}
                <span className="faq-indicator" aria-hidden="true"><span /></span>
              </button>
              {open && (
                <div id={panelId} role="region" aria-labelledby={triggerId}>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
