import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 120 32" aria-hidden="true" {...props}>
      <text
        x="0"
        y="24"
        fontSize="24"
        className={clsx(
          invert
            ? 'fill-white font-display font-medium tracking-tight'
            : 'fill-neutral-950 font-display font-medium tracking-tight',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      >
        EthanBDev
      </text>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 150 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="0"
        y="24"
        fontSize="24"
        className={
          invert
            ? 'fill-white font-display font-medium tracking-tight'
            : 'fill-neutral-950 font-display font-medium tracking-tight'
        }
      >
        EthanBDev
      </text>
    </svg>
  )
}
