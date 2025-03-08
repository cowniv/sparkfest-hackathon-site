import { describe, expect, it } from 'vitest'

import {
  emptyMember,
  MAX_MEMBERS,
  MIN_MEMBERS,
  validateRegistration,
} from './registration.js'

const validForm = () => ({
  teamName: 'Byte Builders',
  track: '4',
  agree: true,
  members: [
    { name: 'Ada', email: 'ada@example.com', school: 'PUP' },
    { name: 'Grace', email: 'grace@example.com', school: 'PUP' },
  ],
})

describe('registration validation', () => {
  it('accepts a complete team', () => {
    expect(validateRegistration(validForm())).toBeNull()
  })

  it('reports incomplete top-level fields', () => {
    const form = validForm()
    form.teamName = 'A'
    form.track = ''
    form.agree = false

    expect(validateRegistration(form)).toMatchObject({
      teamName: expect.any(String),
      track: expect.any(String),
      agree: expect.any(String),
    })
  })

  it('rejects duplicate emails without mislabeling blank addresses', () => {
    const duplicate = validForm()
    duplicate.members[1].email = ' ADA@example.com '
    expect(validateRegistration(duplicate).members[1].email).toMatch(/different email/i)

    const blank = validForm()
    blank.members.forEach((member) => { member.email = '' })
    expect(validateRegistration(blank).members[1].email).toMatch(/complete email/i)
  })

  it('exposes stable member bounds and fresh member values', () => {
    expect(MIN_MEMBERS).toBe(2)
    expect(MAX_MEMBERS).toBe(5)
    expect(emptyMember()).toEqual({ name: '', email: '', school: '' })
    expect(emptyMember()).not.toBe(emptyMember())
  })
})
