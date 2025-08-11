"use client"

import * as React from "react"

type BadgeProps = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export function AppStoreBadge(props: BadgeProps) {
  const { className, ...rest } = props
  return (
    <svg
      viewBox="0 0 135 40"
      role="img"
      aria-label="Download on the App Store"
      className={className}
      {...rest}
    >
      <rect width="135" height="40" rx="8" fill="#000" />
      <g transform="translate(10,8)">
        <path
          fill="#fff"
          d="M18.7 9.6c-.1-2.3 1.9-3.4 2-3.5-1.1-1.6-2.9-1.8-3.5-1.8-1.5-.2-3 .9-3.7.9-.8 0-1.9-.9-3.1-.8-1.6.1-3.1.9-3.9 2.3-1.7 3- .4 7.4 1.2 9.8.8 1.1 1.8 2.4 3.1 2.3 1.2-.1 1.7-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.1 2.9-2.2.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.4-.9-2.5-3.3z"
        />
        <path fill="#fff" d="M24.5 4.5c.7-.9 1.2-2.1 1.1-3.3-1.1.1-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.2.1 2.3-.6 3-1.5z" />
      </g>
      <g transform="translate(44,9)">
        <text x="0" y="8" fill="#fff" fontFamily="-apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial" fontSize="8" fontWeight="400">Download on the</text>
        <text x="0" y="22" fill="#fff" fontFamily="-apple-system, system-ui, Segoe UI, Roboto, Helvetica, Arial" fontSize="16" fontWeight="700">App Store</text>
      </g>
    </svg>
  )
}

export function GooglePlayBadge(props: BadgeProps) {
  const { className, ...rest } = props
  return (
    <svg
      viewBox="0 0 180 53"
      role="img"
      aria-label="Get it on Google Play"
      className={className}
      {...rest}
    >
      <rect width="180" height="53" rx="8" fill="#000" />
      <g transform="translate(10,10)">
        <polygon points="0,16 0,0 14,8" fill="#00A0FF" />
        <polygon points="0,16 14,8 0,24" fill="#00D1FF" />
        <polygon points="0,24 14,8 28,16 18,22" fill="#00F2EA" />
        <polygon points="0,0 18,6 28,16 14,8" fill="#00E3B5" />
      </g>
      <g transform="translate(50,12)">
        <text x="0" y="10" fill="#fff" fontFamily="Roboto, Helvetica, Arial" fontSize="9" fontWeight="400">GET IT ON</text>
        <text x="0" y="27" fill="#fff" fontFamily="Roboto, Helvetica, Arial" fontSize="18" fontWeight="700">Google Play</text>
      </g>
    </svg>
  )
}


