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
