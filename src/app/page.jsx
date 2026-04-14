import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { List, ListItem } from '../components/List'
import { SectionIntro } from '../components/SectionIntro'
import { StylizedImage } from '../components/StylizedImage'
import { TrustedBy } from '../components/TrustedBy'
import imageLaptop from '@/images/laptop.jpg'
import imageHeroDevices from '@/images/hero-devices.png'
import { loadCaseStudies } from '../lib/mdx'

import { Button } from '../components/Button'

function Clients() {
  return (
    <div className="mt-16 rounded-4xl bg-neutral-950 py-20 sm:mt-20 sm:py-32 lg:mt-24">
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
                      className="h-16 w-auto"
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
        title="Tech solutions for Kelowna & Okanagan businesses"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Based in Kelowna, BC — I work with local businesses across the Okanagan and Canada. Have an outdated website or no website at all? I&apos;ve got you covered.
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
              If your Kelowna business is struggling in local search results, I
              can help. I use schema markup and Google-recommended best practices
              to help your site rank higher and get found.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function CustomSolutions() {
  const capabilities = [
    {
      num: '01',
      title: 'Lead-gen pipelines',
      body: 'Automated outreach that sources the right businesses, drafts personalized messaging for each one, and sends at scale — so your pipeline fills while you sleep.',
      tone: 'bg-neutral-950 text-white',
      eyebrowTone: 'text-neutral-500',
      bodyTone: 'text-neutral-300',
      span: 'lg:col-span-7',
    },
    {
      num: '02',
      title: 'Automated blog & content systems',
      body: 'AI-authored, SEO-graded articles published on a schedule — inside a CMS that reviews, ranks, and ships posts with zero manual steps.',
      tone: 'bg-neutral-100 text-neutral-950',
      eyebrowTone: 'text-neutral-500',
      bodyTone: 'text-neutral-600',
      span: 'lg:col-span-5',
    },
    {
      num: '03',
      title: 'Custom AI agents',
      body: 'Chatbots, assistants, and tool-calling agents trained on your business — answering leads, scheduling jobs, summarizing data, or drafting inside your own stack.',
      tone: 'bg-neutral-100 text-neutral-950',
      eyebrowTone: 'text-neutral-500',
      bodyTone: 'text-neutral-600',
      span: 'lg:col-span-5',
    },
    {
      num: '04',
      title: 'Internal company tools',
      body: 'Role-based dashboards, CRMs, trackers, and operational software shaped to exactly how your team runs — not how an off-the-shelf SaaS wishes it did.',
      tone: 'bg-neutral-200 text-neutral-950',
      eyebrowTone: 'text-neutral-600',
      bodyTone: 'text-neutral-700',
      span: 'lg:col-span-7',
    },
  ]

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5 lg:pt-4">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Beyond the website
            </p>
            <h2 className="mt-8 font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl lg:text-6xl">
              Custom tech,{' '}
              <span className="italic font-normal text-neutral-500">
                built for how your business actually runs.
              </span>
            </h2>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:pt-6">
            <p className="text-lg leading-relaxed text-neutral-600">
              Websites are one slice of what I build. Most of my recent work has
              been behind closed doors — automation pipelines, AI agents, and
              internal tools for teams that outgrew off-the-shelf software. If
              you can describe the workflow, I can build it.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              No templates, no bloated SaaS fees, no abstracted-away decisions —
              bespoke software shaped around how your team already thinks.
            </p>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <FadeInStagger
          faster
          className="grid grid-cols-1 gap-6 lg:grid-cols-12"
        >
          {capabilities.map((c) => (
            <FadeIn key={c.num} className={c.span}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-4xl p-8 sm:p-10 lg:p-12 ${c.tone}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-display text-xs font-semibold uppercase tracking-[0.28em] ${c.eyebrowTone}`}
                  >
                    {c.num} — Capability
                  </span>
                  <span
                    aria-hidden="true"
                    className={`font-display text-[5rem] font-medium leading-none tracking-tight opacity-10 sm:text-[7rem] ${c.tone.includes('text-white') ? 'text-white' : 'text-neutral-950'}`}
                  >
                    {c.num}
                  </span>
                </div>
                <h3 className="mt-8 max-w-md font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {c.title}
                </h3>
                <p className={`mt-5 max-w-lg text-base leading-relaxed ${c.bodyTone}`}>
                  {c.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <FadeIn>
          <div className="grid grid-cols-1 gap-10 rounded-4xl bg-neutral-50 px-8 py-12 sm:px-14 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:px-20">
            <div className="lg:col-span-7">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Currently — under NDA
              </p>
              <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight text-neutral-950 sm:text-3xl">
                Working closely with several Okanagan companies on internal
                tooling that will never appear on a portfolio page — the kind of
                software that quietly makes a business run better.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
                If you&apos;ve got a workflow worth automating or an internal
                tool that&apos;s been stuck on a whiteboard for months, let&apos;s
                talk. I can make almost anything your business actually needs.
              </p>
            </div>
            <div className="flex items-end lg:col-span-5 lg:justify-end">
              <Button
                href="/contact"
                invert={true}
                className="border border-black"
                inactiveBg="bg-white"
                inactiveText="text-black"
                activeBg="bg-black"
                activeText="text-white"
              >
                Start a project
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Tech Solutions in Kelowna, BC | EthanBDev',
  description:
    'Custom websites, web apps, and AI-powered automation for businesses in Kelowna, the Okanagan, and across Canada. Affordable tech solutions built to perform.',
  keywords:
    'tech solutions Kelowna, web developer Kelowna, web design Kelowna BC, website design Okanagan, AI automation Kelowna, web app development Kelowna BC, custom software Kelowna, small business tech Kelowna, SEO Kelowna, technology solutions British Columbia',
  authors: [{ name: 'Ethan Breitkreutz', url: 'https://ethanbdev.com' }],
  openGraph: {
    title: 'Tech Solutions in Kelowna, BC | EthanBDev',
    description:
      'Custom websites, web apps, and AI-powered automation for businesses in Kelowna, the Okanagan, and across Canada.',
    url: 'https://ethanbdev.com',
    images: [{ url: '/about/ethan2.webp', width: 800, height: 600, alt: 'Ethan Breitkreutz - Kelowna Tech Solutions' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Solutions in Kelowna, BC | EthanBDev',
    description:
      'Custom websites, web apps, and AI-powered automation for businesses in Kelowna, the Okanagan, and across Canada.',
    images: ['/about/ethan2.webp'],
  },
}

export default async function Home() {
  let allCaseStudies = await loadCaseStudies()
  let featuredSlugs = ['empire-blog-cms', 'teleta-vox', 'empire-landscaping']
  let caseStudies = featuredSlugs
    .map((slug) => allCaseStudies.find((c) => c.href === `/portfolio/${slug}`))
    .filter(Boolean)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Tech Solutions for Kelowna Businesses
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Custom websites, web apps, and AI-powered automation for businesses in the Okanagan and across Canada — built to perform, rank, and convert.
            </p>
          </FadeIn>
          <FadeIn className="flex justify-center lg:justify-end">
            <Image
              src={imageHeroDevices}
              alt="Laptop and phone showing Empire Landscaping website"
              className="w-full max-w-md h-auto"
              priority
            />
          </FadeIn>
        </div>
      </Container>

      <TrustedBy />

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Services />

      <CustomSolutions />

      <ContactSection />
    </>
  )
}
