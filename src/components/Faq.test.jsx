import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Faq from './Faq.jsx'

describe('Faq', () => {
  it('connects each question to its answer region', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const question = screen.getByRole('button', { name: 'Who can join?' })
