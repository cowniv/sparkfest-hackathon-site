import { describe, expect, it } from 'vitest'

import {
  emptyMember,
  MAX_MEMBERS,
  MIN_MEMBERS,
  validateRegistration,
} from './registration.js'

const validForm = () => ({
  teamName: 'Byte Builders',
  track: '4',
  agree: true,
  members: [
    { name: 'Ada', email: 'ada@example.com', school: 'PUP' },
    { name: 'Grace', email: 'grace@example.com', school: 'PUP' },
  ],
})
