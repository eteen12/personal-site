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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </GridListItem>
          <GridListItem title="Getting old bikes running" invert>
            <iframe
              width="100%"
              height="100%"
              src="https://youtube.com/embed/2cVASY-3qSc?si=PKxwjP04WPfzWepv"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </GridListItem>
          <GridListItem title="Exploring" invert>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9zMkGybI9tw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </GridListItem>
        </GridList>
        <p className="mt-8 text-center text-white">
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
  title: 'About Ethan Breitkreutz — Kelowna Tech Solutions',
  description:
    'Ethan Breitkreutz is a tech solutions provider based in Kelowna, BC. Custom websites, web apps, and AI automation for businesses across the Okanagan and Canada.',
  openGraph: {
    title: 'About Ethan Breitkreutz — Kelowna Tech Solutions',
    description:
      'Tech solutions provider based in Kelowna, BC. Websites, web apps, and AI automation for Okanagan businesses.',
    url: 'https://ethanbdev.com/about',
    images: [{ url: '/about/ethan2.webp', width: 800, height: 600, alt: 'Ethan Breitkreutz' }],
  },
}

export default async function About() {
  return (
    <>
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="">
          <PageIntro eyebrow="About me" title="About Ethan Breitkreutz">
            <p className="underline">
              Ethan Breitkreutz is a Canadian software developer and student at
              UBC.
            </p>
            <div className="mt-10 max-w-2xl space-y-6">
              <p>
                When I'm not coding, you can find me studying or enjoying my
                other passions.
              </p>
            </div>
          </PageIntro>
        </div>
        <div className="flex justify-center mt-auto">
          <div className="relative mx-auto h-[450px] w-[550px] rounded-4xl">
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
