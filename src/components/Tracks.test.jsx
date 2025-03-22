import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Tracks from './Tracks.jsx'

describe('Tracks', () => {
  it('exposes the active filter and result count', async () => {
    const user = userEvent.setup()
    render(<Tracks />)

    const all = screen.getByRole('button', { name: 'All' })
