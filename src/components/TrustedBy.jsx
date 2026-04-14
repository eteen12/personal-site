import Image from 'next/image'

import { Container } from './Container'
import { FadeIn } from './FadeIn'
import codeBrackets from '/public/logos/code_brackets.webp'
import curbchatLogo from '/public/logos/curbchat-logo.png'
import empireLogo from '/public/logos/empire-logo.webp'
import gaiaLogo from '/public/logos/gaiaLogo.png'
import realtorCoachingLogo from '/public/logos/realtor-coaching-logo.png'
import sweetYardsLogo from '/public/logos/sweetYardsLogo.png'
import teletaVoxLogo from '/public/logos/teleta-vox-logo.png'
import zbsalonLogo from '/public/logos/zbsalon-logo.png'

const logos = [
  { src: codeBrackets, alt: 'EthanBDev' },
  { src: empireLogo, alt: 'Empire Landscaping' },
  { src: gaiaLogo, alt: 'Gaia Landscaping' },
  { src: sweetYardsLogo, alt: 'Sweet Yards Landscaping' },
  { src: zbsalonLogo, alt: "Zobeida's Hair Salon" },
  { src: teletaVoxLogo, alt: 'Teleta Vox' },
  { src: curbchatLogo, alt: 'CurbChat' },
  { src: realtorCoachingLogo, alt: 'Realtor Coaching App' },
]

export function TrustedBy() {
  const loop = [...logos, ...logos]

  return (
    <Container className="mt-20 sm:mt-24">
      <FadeIn>
        <p className="text-left font-display text-sm font-semibold uppercase tracking-widest text-neutral-950">
          Trusted by
        </p>
        <div
          className="mt-8 overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-x-16 sm:gap-x-24">
            {loop.map((logo, i) => (
              <div
                key={i}
                className="flex h-16 w-32 flex-none items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain opacity-70 transition hover:opacity-100"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
