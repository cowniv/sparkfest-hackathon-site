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
      </Section>
    )
  }

  const memberErr = (i, field) => errors?.members[i]?.[field]

  return (
    <Section id="register" title="Try the registration flow" subtitle={`Demo a team of ${MIN} to ${MAX} members. No information is sent or stored.`}>
      <form className="form" onSubmit={handleSubmit} noValidate>
        {errors && (
          <div className="error-summary" role="alert" tabIndex="-1" ref={errorSummaryRef}>
            <h3>Check your registration details</h3>
            <p>Correct the highlighted fields, then submit again.</p>
          </div>
        )}
        <div className="row">
          <div className="field">
            <label htmlFor="team-name">Team name</label>
            <input
              id="team-name"
              name="teamName"
              value={form.teamName}
              maxLength="60"
              required
              aria-invalid={Boolean(errors?.teamName)}
              aria-describedby={errors?.teamName ? 'team-name-error' : undefined}
              onChange={(e) => update('teamName', e.target.value)}
            />
            {errors?.teamName && <span id="team-name-error" className="error">{errors.teamName}</span>}
          </div>
          <div className="field">
            <label htmlFor="challenge-track">Challenge track</label>
            <select
              id="challenge-track"
              name="track"
              value={form.track}
              required
              aria-invalid={Boolean(errors?.track)}
              aria-describedby={errors?.track ? 'challenge-track-error' : undefined}
              onChange={(e) => update('track', e.target.value)}
            >
              <option value="">Select a track</option>
              {TRACKS.map((t) => (
                <option key={t.id} value={t.sdg}>SDG {t.sdg} · {t.title}</option>
              ))}
            </select>
            {errors?.track && <span id="challenge-track-error" className="error">{errors.track}</span>}
          </div>
        </div>

        <h3>Members ({form.members.length}/{MAX})</h3>
        {form.members.map((m, i) => (
          <fieldset key={i} className="member">
            <legend>{i === 0 ? 'Team leader' : `Member ${i + 1}`}</legend>
            <div className="field">
              <label htmlFor={`member-${i}-name`}>Full name</label>
              <input
                id={`member-${i}-name`}
                name={`members.${i}.name`}
                value={m.name}
                maxLength="80"
                required
                aria-invalid={Boolean(memberErr(i, 'name'))}
                aria-describedby={memberErr(i, 'name') ? `member-${i}-name-error` : undefined}
