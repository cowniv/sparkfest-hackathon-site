import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import RegisterForm from './RegisterForm.jsx'

describe('RegisterForm', () => {
  it('focuses an actionable summary and links field errors', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.click(screen.getByRole('button', { name: 'Submit registration' }))

    const summary = screen.getByRole('alert')
    await waitFor(() => expect(summary).toHaveFocus())
    const teamName = screen.getByLabelText('Team name')
    expect(teamName).toHaveAttribute('aria-invalid', 'true')
    expect(teamName).toHaveAccessibleDescription(/at least 3 characters/i)
  })

  it('adds and removes optional members within the allowed bounds', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    expect(screen.getAllByRole('group')).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: 'Add team member' }))
    expect(screen.getAllByRole('group')).toHaveLength(3)

    await user.click(screen.getByRole('button', { name: 'Remove member 3' }))
    expect(screen.getAllByRole('group')).toHaveLength(2)
  })

  it('accepts a complete demo registration', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.type(screen.getByLabelText('Team name'), 'Byte Builders')
    await user.selectOptions(screen.getByLabelText('Challenge track'), '4')

    const names = screen.getAllByLabelText('Full name')
    const emails = screen.getAllByLabelText('Email')
    const schools = screen.getAllByLabelText('School')
    await user.type(names[0], 'Ada Lovelace')
    await user.type(emails[0], 'ada@example.com')
    await user.type(schools[0], 'PUP')
    await user.type(names[1], 'Grace Hopper')
    await user.type(emails[1], 'grace@example.com')
    await user.type(schools[1], 'PUP')
    await user.click(screen.getByLabelText(/agrees to the code of conduct/i))
    await user.click(screen.getByRole('button', { name: 'Submit registration' }))

    expect(screen.getByRole('heading', { name: /demo submission complete/i })).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/no information was sent or stored/i)

    await user.click(screen.getByRole('button', { name: 'Start another demo' }))
    const resetName = screen.getByLabelText('Team name')
    await waitFor(() => expect(resetName).toHaveFocus())
    expect(resetName).toHaveValue('')
  })
})
