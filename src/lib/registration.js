export const MIN_MEMBERS = 2
export const MAX_MEMBERS = 5

export const emptyMember = () => ({ name: '', email: '', school: '' })

const emailOk = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export function validateRegistration(form) {
  const errors = { members: [] }
  const teamName = form.teamName.trim()

  if (teamName.length < 3) errors.teamName = 'Enter at least 3 characters.'
  else if (teamName.length > 60) errors.teamName = 'Use 60 characters or fewer.'
  if (!form.track) errors.track = 'Choose a challenge track.'

