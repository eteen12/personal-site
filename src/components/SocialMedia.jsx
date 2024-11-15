import clsx from 'clsx'
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa6'

export const socialMediaProfiles = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ethan-breitkreutz',
    icon: FaLinkedin,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/ethan_breitkreutz/',
    icon: FaInstagram,
  },
  { title: 'GitHub', href: 'https://github.com/eteen12', icon: FaGithub },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@Ethan-Breitkreutz',
    icon: FaYoutube,
  },
]

export function SocialMedia({ className, invert = false }) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <a
            href={socialMediaProfile.href}
            target="_blank"
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </a>
        </li>
      ))}
    </ul>
  )
}
