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

