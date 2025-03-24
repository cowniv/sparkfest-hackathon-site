import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Tracks from './Tracks.jsx'

describe('Tracks', () => {
  it('exposes the active filter and result count', async () => {
    const user = userEvent.setup()
    render(<Tracks />)

    const all = screen.getByRole('button', { name: 'All' })
    const planet = screen.getByRole('button', { name: 'Planet' })
    expect(all).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('Showing 8 challenge tracks.')).toBeInTheDocument()

    await user.click(planet)

    expect(planet).toHaveAttribute('aria-pressed', 'true')
    expect(all).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText('Showing 3 challenge tracks.')).toBeInTheDocument()
  })
})
