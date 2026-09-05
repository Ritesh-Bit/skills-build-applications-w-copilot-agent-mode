import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigation = [
  ['/', 'Overview'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Members'],
  ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <section className="overview-page">
      <p className="eyebrow">OCTOFIT TRACKER / 2026</p>
      <h1>Make momentum visible.</h1>
      <p className="intro">A shared view of your people, progress, and next best effort.</p>
      <div className="overview-grid">
        <NavLink className="overview-card overview-card--warm" to="/activities"><span>01</span><strong>Log activity</strong><small>Keep today moving</small></NavLink>
        <NavLink className="overview-card overview-card--cool" to="/leaderboard"><span>02</span><strong>Check the board</strong><small>See who is climbing</small></NavLink>
        <NavLink className="overview-card overview-card--green" to="/workouts"><span>03</span><strong>Find your next set</strong><small>Personalized suggestions</small></NavLink>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/">OCTOFIT <em>TRACKER</em></NavLink>
        <nav aria-label="Primary navigation">
          {navigation.map(([to, label]) => <NavLink key={to} end={to === '/'} to={to}>{label}</NavLink>)}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Overview />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
