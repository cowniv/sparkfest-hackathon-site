import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import Nav from './Nav.jsx'

vi.mock('../hooks/useScrollSpy.js', () => ({
  default: () => 'tracks',
}))

describe('Nav', () => {
  it('announces the current section', () => {
    render(<Nav />)

    expect(screen.getByRole('link', { name: 'Tracks' })).toHaveAttribute('aria-current', 'location')
  })

  it('opens, closes, and escapes the mobile navigation', async () => {
    const user = userEvent.setup()
    render(<Nav />)
