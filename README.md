# Sparkfest Hackathon Site

**Inspired by:** Sparkfest 2025, GDG PUP's one-week SDG-themed hackathon, where I was UI/UX Co-Lead

I helped design the original Sparkfest pages and later rebuilt the experience independently in React to practice component architecture, state, accessibility, and responsive implementation. This repository is a portfolio exercise, not the event's official registration portal.

## Features

- Event-state messaging driven by a reusable `useCountdown` hook
- SDG challenge track cards with People / Planet / Prosperity filters
- Archived week timeline and clearly labeled illustrative prize and mentor content
- Accessible FAQ disclosure controls
- Local registration demo with dynamic teams of two to five members
- Field-level validation for required values, lengths, email format, duplicate emails, and conduct agreement
- Keyboard-accessible sticky navigation with scroll spy and a responsive menu
- Reduced-motion support, visible focus states, and 44px touch targets

No registration data is transmitted or stored.

## Run locally

```bash
npm ci
npm run dev
```

## Verify

