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
