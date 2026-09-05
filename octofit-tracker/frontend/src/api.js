const configuredCodespaceName = import.meta.env.VITE_CODESPACE_NAME
const forwardedCodespaceName = typeof window !== 'undefined'
  ? window.location.hostname.match(/^(.+)-\d+\.app\.github\.dev$/)?.[1]
  : undefined
const codespaceName = configuredCodespaceName || forwardedCodespaceName

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export async function fetchCollection(component) {
  const response = await fetch(`${apiBaseUrl}/${component}/`)
  if (!response.ok) throw new Error(`Request failed (${response.status})`)
  const payload = await response.json()
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.data)) return payload.data
  if (Array.isArray(payload.items)) return payload.items
  return payload ? [payload] : []
}