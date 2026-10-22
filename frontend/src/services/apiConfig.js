const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const apiOrigin = (
    configuredApiBaseUrl || "https://arcforma-studio.onrender.com/api"
).replace(/\/+$/, "");

// Keep the contact endpoint correct even if Vercel is configured with the
// Render origin instead of the full `/api` base URL.
export const API_BASE_URL = apiOrigin.endsWith("/api")
    ? apiOrigin
    : `${apiOrigin}/api`;
