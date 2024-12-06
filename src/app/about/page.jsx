import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'

import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="My Values"
        title="Core Principles That Guide My Work"
        invert
      >
        <p>
          I&apos;ve cultivated a set of core values that guide my interactions
          with clients and my approach to projects.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Integrity" invert>
            I believe in being honest and doing the right thing, always.
            Transparency and accountability are key in everything I do.
          </GridListItem>
          <GridListItem title="Empathy" invert>
            I make an effort to really listen and understand your needs, so I
            can create solutions that work for you.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            I stay open to learning and feedback, valuing collaboration and
            always aiming to improve.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'About Ethan Breitkreutz',
  description:
    'About Ethan Breitkreutz, the Canadian web developer, student, and programmer',
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'person',
      name: 'Ethan Breitkreutz',
      url: 'https://teletadevelopment.com',
      logo: 'https://teletadevelopment.com/teletaLogo.png',
      sameAs: [
        'https://www.instagram.com/ethan_breitkreutz/',
        'https://www.linkedin.com/in/ethan-breitkreutz/',
        'https://www.youtube.com/@Ethan-Breitkreutz',
        'https://x.com/12Eteen',
        'https://github.com/eteen12',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'ethan@ethanbdev.com',
        contactType: 'Customer Service',
        areaServed: 'CA',
        availableLanguage: 'English',
      },
    },
  ],
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 lg:grid-cols-2">
        <div>
          <PageIntro eyebrow="About me" title="About Ethan Breitkreutz">
            <p>
              Ethan Breitkreutz is a Canadian web developer, student, and
              programmer.
            </p>
            <div className="mt-10 max-w-2xl space-y-6 text-base">
              <p>
                Im a confident and competent developer, using technologies such
                as NextJS, Tailwind CSS, and Linux. I have a passion for
                creating clean, efficient, and user-friendly websites
              </p>
              <p>
                When I’m not coding, you can find me exploring my other
                interests such as music, philosophy, and personal development. I
                strive to improve myself both professionally and personally, and
                I’m always looking for new ways to learn in the world of tech.
              </p>
            </div>
          </PageIntro>
        </div>
        <div className="relative mt-auto h-[400px] rounded-4xl">
          <div className="relative mx-auto mt-auto h-[400px] w-[500px] rounded-4xl">
            <Image
              src={'/about/ethan2.webp'}
              alt="photo of ethan breitkreutz smiling at camera"
              className="rounded-4xl object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>

      <Culture />

      

      <ContactSection />
    </>
  )
}
