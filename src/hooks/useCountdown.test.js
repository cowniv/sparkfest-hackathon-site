import { describe, expect, it } from 'vitest'

import { getRemaining } from './useCountdown.js'

describe('getRemaining', () => {
  it('breaks a future duration into readable units', () => {
    const now = Date.parse('2025-03-20T09:00:00+08:00')
    const target = '2025-03-24T10:02:03+08:00'

    expect(getRemaining(target, now)).toEqual({
