import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { List, ListItem } from '../components/List'
import { SectionIntro } from '../components/SectionIntro'
import { StylizedImage } from '../components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '../lib/mdx'

import { Button } from '../components/Button'

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="flex items-center gap-x-8">
          <div className="w-full">
            <h2 className="font-display text-5xl tracking-tight text-white lg:text-7xl">
              Want to work together?
            </h2>
            <h2 className="font-display text-5xl tracking-tight text-white lg:text-7xl">
              Contact me today
            </h2>
            <Button
              href="/contact"
              invert={true}
              className={
                'mt-5 border border-white hover:bg-white hover:text-black'
              }
              inactiveBg={''}
              inactiveText={'text-white'}
              activeBg={'bg-white'}
              activeText={'text-black'}
            >
              Contact
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Take a look at my portfolio"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>Click a card to see each individual project</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Project</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Creating websites for businesses across Canada"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Have an outdated website? Or even no website at all? No worries, I do
          it all.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              I specialize in front-end web development, using modern
              technologies like Next.js to create fast, responsive, and visually
              appealing websites.
            </ListItem>
            <ListItem title="Web design">
              I create visually appealing sites by using Tailwind CSS to create
              responsive and great looking sites. I also use GIMP to photoshop
              images.
            </ListItem>
            <ListItem title="Website redesign">
              Already have existing content? No worries, I can redesign and
              revamp your site to ensure your digital presence looks
              professional.
            </ListItem>
            <ListItem title="Search engine optimization">
              If your business is struggling in search results, I can help you
              out. I use schema markups, and google recommended best practices
              to recieve great ranking sites.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  keywords:
    'web development, web design, Kelowna, British Columbia, Canada, responsive, SEO, affordable, custom, small business',
  author: 'Ethan Breitkreutz',
  metadataBase: new URL('https://ethanbdev.com'),
  og: {
    title: 'EthanBDev',
    description:
      'Website design and development services for Kelowna businesses. Affordable, custom, responsive, and SEO-friendly websites.',
    url: 'https://www.stoicquotes.ca',
    image: 'https://www.stoicquotes.ca/about/ethan2.webp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EthanBDev',
    description:
      'Website design and development services for Kelowna businesses. Affordable, custom, responsive, and SEO-friendly websites.',
    image: 'https://www.stoicquotes.ca/about/ethan2.webp',
  },
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'person',
      name: 'Ethan Breitkreutz',
      url: 'https://EthanBDev.com',
      image: 'https://www.stoicquotes.ca/about/ethan2.webp',
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
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://EthanBDev.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Websites That Reflect Your Brand's Vision.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Websites that are simple, clear, and focused on your business's true
            needs. Delivering real value without hidden complexity—just
            transparent, effective solutions that truly represent you and your
            business.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Services />

      <ContactSection />
    </>
  )
}
