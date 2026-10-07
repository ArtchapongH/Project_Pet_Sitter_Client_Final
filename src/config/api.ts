// Central place to configure the backend API port/base URL.
// Change VITE_API_PORT in your .env file to switch ports across the whole app.
export const API_PORT = import.meta.env.VITE_API_PORT || '8083'
// In production, requests go through the Vercel /api rewrite.
export const API_BASE_URL = import.meta.env.PROD
  ? '/api'
  : `http://localhost:${API_PORT}/api`
