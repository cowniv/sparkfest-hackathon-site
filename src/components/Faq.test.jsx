import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Faq from './Faq.jsx'

describe('Faq', () => {
  it('connects each question to its answer region', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const question = screen.getByRole('button', { name: 'Who can join?' })

    expect(question).toHaveAttribute('aria-expanded', 'false')
    await user.click(question)

    expect(question).toHaveAttribute('aria-expanded', 'true')
    const answer = screen.getByRole('region', { name: 'Who can join?' })
    expect(question).toHaveAttribute('aria-controls', answer.id)
  })

  it('keeps only one answer open', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: 'Who can join?' }))
    await user.click(screen.getByRole('button', { name: 'Is it online or onsite?' }))

    expect(screen.queryByRole('region', { name: 'Who can join?' })).not.toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Is it online or onsite?' })).toBeInTheDocument()
  })
})
