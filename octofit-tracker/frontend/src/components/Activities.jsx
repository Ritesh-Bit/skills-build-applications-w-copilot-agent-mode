import ResourcePage from './ResourcePage'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : undefined

export default function Activities() {
  return <ResourcePage component="activities" endpoint={activitiesEndpoint} title="Activities" eyebrow="MOVEMENT LOG" description="Every session counts. Keep the team pulse in view." />
}