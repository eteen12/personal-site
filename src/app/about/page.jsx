import Image from 'next/image'

import { ContactSection } from '../../components/ContactSection'
import { Container } from '../../components/Container'
import { FadeIn, FadeInStagger } from '../../components/FadeIn'
import { GridList, GridListItem } from '../../components/GridList'
import { PageIntro } from '../../components/PageIntro'
import { PageLinks } from '../../components/PageLinks'
import { SectionIntro } from '../../components/SectionIntro'

import { loadArticles } from '../../lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Get to know me"
        title="Check out me enjoying some of my hobbies"
        invert
      ></SectionIntro>
      <Container className="mt-16">
        <GridList className={'grid grid-cols-1'}>
          <GridListItem title="Dirt biking" invert>
            <iframe
              width="100%"
              height="100%"
              src="https://youtube.com/embed/SG56rD00SE4?si=D9EX9FXOSzc8xnVC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </GridListItem>
          <GridListItem title="Playing an out of tune guitar (lol)" invert>
            <iframe
              width="100%"
              height="100%"
              src="https://youtube.com/embed/5P0WjeijMSs?si=VmYd0p_scAZqdLkA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </GridListItem>
          <GridListItem title="Exploring" invert>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9zMkGybI9tw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </GridListItem>
        </GridList>
        <p className="text-center text-white mt-8">
          Check out more of what I got going on!{' '}
          <a
            className="text-blue-400 underline"
            href="https://www.youtube.com/@Ethan-Breitkreutz"
            target="_blank"
          >
            Link
          </a>
        </p>
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
  return (
    <>
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 lg:grid-cols-2">
        <div>
          <PageIntro eyebrow="About me" title="About Ethan Breitkreutz">
            <p className="underline">
              Ethan Breitkreutz is a Canadian web developer, student, and
              programmer.
            </p>
            <div className="mt-10 max-w-2xl space-y-6">
              <p>
                When I'm not coding, you can find me expoloring my other
                interests like dirt biking, music, history, or studying.
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
