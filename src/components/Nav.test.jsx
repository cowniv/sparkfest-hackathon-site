import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import Nav from './Nav.jsx'

vi.mock('../hooks/useScrollSpy.js', () => ({
  default: () => 'tracks',
}))

