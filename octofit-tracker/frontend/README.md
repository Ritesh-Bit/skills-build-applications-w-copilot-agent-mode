# OctoFit Tracker frontend

The Vite presentation tier expects the Codespaces name in a local environment file:

```bash
# octofit-tracker/frontend/.env.local
VITE_CODESPACE_NAME=your-codespace-name
```

Vite exposes `VITE_CODESPACE_NAME` through `import.meta.env`. The app uses it to call `https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/`. When it is unset, development requests safely fall back to `http://localhost:8000/api`.

Run the frontend with `npm run dev --prefix octofit-tracker/frontend`.
