// Resolve a public-folder asset path against Vite's base URL.
// The site is served from a subpath (e.g. /Mr.Mourya-web-tech/), so a bare
// "/assets/..." string would 404. Prefixing with import.meta.env.BASE_URL
// makes paths work both locally ("/") and on GitHub Pages.
export default function asset(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
}
