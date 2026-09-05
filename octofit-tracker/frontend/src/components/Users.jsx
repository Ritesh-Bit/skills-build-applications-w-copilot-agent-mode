import ResourcePage from './ResourcePage'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : undefined

export default function Users() {
  return <ResourcePage component="users" endpoint={usersEndpoint} title="Members" eyebrow="THE COMMUNITY" description="People first, progress always." />
}