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

  const emails = new Set()
  form.members.forEach((member, index) => {
    const memberErrors = {}
    const name = member.name.trim()
    const email = member.email.trim().toLowerCase()
    const school = member.school.trim()

    if (!name) memberErrors.name = 'Enter this member’s name.'
    else if (name.length > 80) memberErrors.name = 'Use 80 characters or fewer.'

    if (!emailOk(email)) memberErrors.email = 'Enter a complete email address.'
    else if (emails.has(email)) memberErrors.email = 'Use a different email for each member.'
    else emails.add(email)

    if (!school) memberErrors.school = 'Enter this member’s school.'
    else if (school.length > 120) memberErrors.school = 'Use 120 characters or fewer.'

    errors.members[index] = memberErrors
  })

  if (!form.agree) errors.agree = 'Accept the code of conduct to continue.'

  const hasErrors =
    errors.teamName ||
    errors.track ||
    errors.agree ||
    errors.members.some((member) => Object.keys(member).length)

  return hasErrors ? errors : null
}
