// Event content lives here so the components stay small.
export const EVENT_START = '2025-03-24T09:00:00+08:00'

export const SECTIONS = [
  { id: 'tracks', label: 'Tracks' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'prizes', label: 'Prizes' },
  { id: 'mentors', label: 'Mentors' },
  { id: 'faq', label: 'FAQ' },
  { id: 'register', label: 'Demo form' },
]

export const TRACKS = [
  { id: 1, sdg: 3, title: 'Good Health & Well-being', theme: 'people', color: '#4c9f38', blurb: 'Tools that make clinics, check-ups and mental health support easier to reach.' },
  { id: 2, sdg: 4, title: 'Quality Education', theme: 'people', color: '#c5192d', blurb: 'Help students learn anywhere, even with slow internet or shared devices.' },
  { id: 3, sdg: 6, title: 'Clean Water & Sanitation', theme: 'planet', color: '#26bde2', blurb: 'Monitor, report and manage water in communities and barangays.' },
  { id: 4, sdg: 7, title: 'Affordable & Clean Energy', theme: 'planet', color: '#fcc30b', blurb: 'Track usage, cut waste and make clean energy easier to adopt.' },
  { id: 5, sdg: 8, title: 'Decent Work & Economic Growth', theme: 'prosperity', color: '#a21942', blurb: 'Support small businesses, freelancers and first-time job seekers.' },
  { id: 6, sdg: 11, title: 'Sustainable Cities', theme: 'prosperity', color: '#fd9d24', blurb: 'Smarter commutes, safer streets and flood-ready neighborhoods.' },
  { id: 7, sdg: 13, title: 'Climate Action', theme: 'planet', color: '#3f7e44', blurb: 'Make climate data understandable and turn it into everyday actions.' },
  { id: 8, sdg: 17, title: 'Partnerships for the Goals', theme: 'people', color: '#19486a', blurb: 'Connect volunteers, orgs and donors around shared causes.' },
]

export const TRACK_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'people', label: 'People' },
  { value: 'planet', label: 'Planet' },
  { value: 'prosperity', label: 'Prosperity' },
]

export const TIMELINE = [
  { day: 'Mon · Mar 24', title: 'Kickoff', detail: 'Opening talk, track reveal and team formation.' },
  { day: 'Tue · Mar 25', title: 'Ideation Day', detail: 'Problem framing workshop and mentor office hours.' },
  { day: 'Wed · Mar 26', title: 'Build Sprint 1', detail: 'Design + prototype. Check-in with your assigned mentor.' },
  { day: 'Thu · Mar 27', title: 'Build Sprint 2', detail: 'Core features done. Tech talk on deploying for free.' },
  { day: 'Fri · Mar 28', title: 'Polish & Pitch Prep', detail: 'Pitch clinic and demo dry-runs.' },
  { day: 'Sat · Mar 29', title: 'Submission', detail: 'Repos and demo videos due at 11:59 PM.' },
  { day: 'Sun · Mar 30', title: 'Demo Day', detail: 'Top teams pitch live, awarding and closing.' },
]

export const PRIZES = [
  { place: 'Champion', amount: '₱15,000', perks: ['Trophy + certificates', 'Swag pack for the team', 'Feature on the org page'] },
  { place: '1st Runner-up', amount: '₱10,000', perks: ['Certificates', 'Swag pack for the team'] },
  { place: '2nd Runner-up', amount: '₱5,000', perks: ['Certificates', 'Stickers + shirts'] },
]

export const MENTORS = [
  { name: 'Mentor profile A', role: 'Frontend Engineering', org: 'Illustrative role' },
  { name: 'Mentor profile B', role: 'Product Design', org: 'Illustrative role' },
  { name: 'Mentor profile C', role: 'Cloud Engineering', org: 'Illustrative role' },
  { name: 'Mentor profile D', role: 'Data Science', org: 'Illustrative role' },
  { name: 'Mentor profile E', role: 'Mobile Development', org: 'Illustrative role' },
  { name: 'Mentor profile F', role: 'Startup Strategy', org: 'Illustrative role' },
]

export const FAQS = [
  { q: 'Who can join?', a: 'Any college student in the Philippines. You don\'t need to be a CS or IT major.' },
  { q: 'How big can my team be?', a: 'Teams of 2 to 5 members. Solo entries are not accepted, but you can find teammates on kickoff day.' },
  { q: 'Is it online or onsite?', a: 'Hybrid. Kickoff and Demo Day are onsite, build days are online.' },
  { q: 'Do I need to know how to code?', a: 'At least one member should be able to build a prototype. Designers and researchers are very welcome.' },
  { q: 'How much is the registration fee?', a: 'It\'s free!' },
]
