import { navigate } from '../router'

export default function Link({ href, onClick, children, ...props }) {
  return <a href={href} {...props} onClick={(event) => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target || props.download !== undefined || !href?.startsWith('/') || href.startsWith('//')) return
    event.preventDefault()
    navigate(href)
  }}>{children}</a>
}
