import { useSyncExternalStore } from 'react'

const subscribe = (callback) => {
  window.addEventListener('popstate', callback)
  return () => window.removeEventListener('popstate', callback)
}
const snapshot = () => (window.location.pathname.replace(/\/+$/, '') || '/') + window.location.hash
export function usePathname() { return useSyncExternalStore(subscribe, snapshot, () => '/') }
export function navigate(href) {
  if (window.location.pathname + window.location.hash === href) return
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
