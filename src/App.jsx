import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Tracks from './components/Tracks.jsx'
import Timeline from './components/Timeline.jsx'
import Prizes from './components/Prizes.jsx'
import Mentors from './components/Mentors.jsx'
import Faq from './components/Faq.jsx'
import RegisterForm from './components/RegisterForm.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Nav />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Tracks />
        <Timeline />
        <Prizes />
        <Mentors />
