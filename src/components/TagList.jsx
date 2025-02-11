import clsx from 'clsx'
import { Button } from './Button'

export function TagList({ children, className }) {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </ul>
  )
}

export function TagListItem({ children, className }) {
  return (
    <li
      className={clsx(
        'rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600',
        className,
      )}
    >
      {children}
    </li>
  )
}

export function TagListItemLink({ children, className }) {
  return (
    <li
      className={clsx(
        'rounded-full bg-black px-4 py-1.5 text-base text-white',
        className,
      )}
    >
      <a
        href="https://www.sweetyards.ca/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        {children}
      </a>
    </li>
  )
}
