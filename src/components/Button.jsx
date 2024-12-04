import Link from 'next/link'
import clsx from 'clsx'

export function Button({
  invert = false,
  className,
  children,
  inactiveBg,
  activeBg,
  inactiveText,
  activeText,
  ...props
}) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ease-in-out duration-300',
    invert
      ? `${inactiveBg} ${inactiveText} hover:${activeBg} hover:${activeText}`
      : `${activeBg} ${activeText} hover:${activeBg} hover:${activeText}`,
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
