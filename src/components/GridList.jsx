import clsx from 'clsx'

import { Border } from './Border'
import { FadeIn, FadeInStagger } from './FadeIn'

export function GridList({ children, className }) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx('grid grid-cols-1 gap-10 lg:grid-cols-3', className)}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function GridListItem({ title, children, className, invert = false }) {
  return (
    <li
      className={clsx(
        'text-base',
        invert
          ? 'text-neutral-300 before:bg-white after:bg-white/10'
          : 'text-neutral-600 before:bg-neutral-950 after:bg-neutral-100',
        className,
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-white' : 'text-neutral-950',
            )}
          >
            {title}.
          </strong>{' '}
          <div className="h-[300px] md:h-[400px] mt-4">{children}</div>
        </Border>
      </FadeIn>
    </li>
  )
}
