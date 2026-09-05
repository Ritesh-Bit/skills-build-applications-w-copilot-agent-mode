import ResourcePage from './ResourcePage'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : undefined

export default function Teams() {
  return <ResourcePage component="teams" endpoint={teamsEndpoint} title="Teams" eyebrow="YOUR CREW" description="Find the people making consistency contagious." />
}