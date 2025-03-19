import { useRef, useState } from 'react'
import Section from './Section.jsx'
import { TRACKS } from '../data.js'
import {
  emptyMember,
  MAX_MEMBERS as MAX,
  MIN_MEMBERS as MIN,
  validateRegistration,
} from '../lib/registration.js'

const initialForm = () => ({
  teamName: '',
  track: '',
  members: [emptyMember(), emptyMember()],
  agree: false,
})

export default function RegisterForm() {
  const errorSummaryRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const update = (field, value) => setForm({ ...form, [field]: value })

  const updateMember = (index, field, value) => {
    const members = form.members.map((m, i) => (i === index ? { ...m, [field]: value } : m))
    setForm({ ...form, members })
  }

  const addMember = () => {
    if (form.members.length < MAX) setForm({ ...form, members: [...form.members, emptyMember()] })
  }

  const removeMember = (index) => {
    if (form.members.length > MIN) setForm({ ...form, members: form.members.filter((_, i) => i !== index) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = validateRegistration(form)
    setErrors(result)
    if (result) {
      requestAnimationFrame(() => errorSummaryRef.current?.focus())
      return
    }
    setSubmitted(true)
  }

  const resetDemo = () => {
    setForm(initialForm())
    setErrors(null)
    setSubmitted(false)
    requestAnimationFrame(() => document.getElementById('team-name')?.focus())
  }

  if (submitted) {
    return (
      <Section id="register" title="Demo submission complete">
        <div className="success" role="status">
          <p><strong>{form.teamName}</strong> completed the demo with {form.members.length} members.</p>
          <p>No information was sent or stored. This form demonstrates the registration experience only.</p>
          <button type="button" className="btn btn-ghost" onClick={resetDemo}>Start another demo</button>
        </div>
