import ResourcePage from './ResourcePage'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : undefined

export default function Leaderboard() {
  return <ResourcePage component="leaderboard" endpoint={leaderboardEndpoint} title="Leaderboard" eyebrow="COMPETITION" description="A little friendly pressure can carry you a long way." />
}