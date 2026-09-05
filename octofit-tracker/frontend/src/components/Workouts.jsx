import ResourcePage from './ResourcePage'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : undefined

export default function Workouts() {
  return <ResourcePage component="workouts" endpoint={workoutsEndpoint} title="Workouts" eyebrow="NEXT BEST EFFORT" description="A focused menu of ways to move well today." />
}