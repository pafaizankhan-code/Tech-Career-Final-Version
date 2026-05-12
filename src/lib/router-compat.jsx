'use client'

// Shim layer that mirrors the bits of react-router-dom v7 the app uses,
// re-implemented on top of Next.js App Router primitives. Lets every page
// and component keep its existing imports and JSX without a rewrite.

import NextLink from 'next/link'
import { usePathname, useRouter, useParams as useNextParams } from 'next/navigation'
import React, { useEffect } from 'react'

// Drop-in <Link>: accepts either `to` (react-router style) or `href`.
export const Link = React.forwardRef(function Link(
  { to, href, replace, state, reloadDocument, prefetch, ...rest },
  ref
) {
  const target = href ?? to ?? '#'
  return <NextLink ref={ref} href={target} prefetch={prefetch} replace={replace} {...rest} />
})

// <NavLink>: supports the function-as-className and function-as-children
// patterns. Derives an `isActive` boolean from the current pathname.
export const NavLink = React.forwardRef(function NavLink(
  {
    to,
    href,
    end = false,
    className,
    style,
    children,
    replace,
    state,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...rest
  },
  ref
) {
  const target = href ?? to ?? '#'
  const pathname = usePathname() || '/'
  const isActive = end
    ? pathname === target
    : pathname === target || pathname.startsWith(target + '/')

  const resolvedClassName =
    typeof className === 'function' ? className({ isActive }) : className
  const resolvedStyle = typeof style === 'function' ? style({ isActive }) : style
  const resolvedChildren =
    typeof children === 'function' ? children({ isActive }) : children

  return (
    <NextLink
      ref={ref}
      href={target}
      className={resolvedClassName}
      style={resolvedStyle}
      replace={replace}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {resolvedChildren}
    </NextLink>
  )
})

// React-Router useLocation. We deliberately skip useSearchParams here to
// avoid the Suspense boundary requirement; nothing in the project reads
// location.search, only location.pathname.
export function useLocation() {
  const pathname = usePathname() || '/'
  return {
    pathname,
    search: '',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
    state: null,
    key: 'default',
  }
}

// react-router useNavigate -> next/router push/replace.
export function useNavigate() {
  const router = useRouter()
  return function navigate(to, options = {}) {
    if (typeof to === 'number') {
      if (to < 0) router.back()
      else router.forward()
      return
    }
    if (options.replace) router.replace(to)
    else router.push(to)
  }
}

// useParams: pass through Next useParams (same { slug } shape used today).
export function useParams() {
  return useNextParams() || {}
}

// Declarative <Navigate to="..." replace /> via an effect.
export function Navigate({ to, replace = false }) {
  const router = useRouter()
  useEffect(() => {
    if (replace) router.replace(to)
    else router.push(to)
  }, [to, replace, router])
  return null
}

export const Outlet = () => null
export default Link
