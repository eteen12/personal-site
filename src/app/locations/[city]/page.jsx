import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ContactSection } from '../../../components/ContactSection'
import { Container } from '../../../components/Container'
import { FadeIn, FadeInStagger } from '../../../components/FadeIn'
import { PageIntro } from '../../../components/PageIntro'
import { SectionIntro } from '../../../components/SectionIntro'
import { locations } from '../../../data/locations'

export async function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }))
}

export async function generateMetadata({ params }) {
  const { city } = await params
  const loc = locations.find((l) => l.slug === city)
  if (!loc) return {}
  const title = `Web Development & Tech Solutions in ${loc.city}, BC`
  const description = `Custom websites, web apps, AI automation, and SEO for businesses in ${loc.city} and ${loc.region}. Built by Ethan Breitkreutz — a Kelowna-based developer.`
  return {
    title,
    description,
    alternates: {
      canonical: `https://ethanbdev.com/locations/${loc.slug}`,
    },
    openGraph: {
      title: `${title} | EthanBDev`,
      description,
      url: `https://ethanbdev.com/locations/${loc.slug}`,
      type: 'website',
    },
  }
}

export default async function LocationPage({ params }) {
  const { city } = await params
  const loc = locations.find((l) => l.slug === city)
  if (!loc) notFound()

  const nearby = (loc.nearby || [])
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `EthanBDev — ${loc.city}`,
    url: `https://ethanbdev.com/locations/${loc.slug}`,
    areaServed: { '@type': 'City', name: loc.city },
    serviceType: [
      'Web Development',
      'Web Design',
      'Web App Development',
      'AI Automation',
      'SEO',
      'Custom Software Solutions',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageIntro eyebrow={`${loc.city}, BC`} title={loc.tagline}>
        <p>{loc.hero}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 px-6 py-16 sm:px-16 sm:py-20">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Why a {loc.city} business should hire local
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Built in BC, shipped for {loc.city}.
            </h2>
            <ul className="mt-10 grid gap-6 text-base text-neutral-300 sm:grid-cols-3">
              {loc.signals.map((s, i) => (
                <li key={i} className="flex gap-x-4">
                  <span className="font-display text-sm text-neutral-500">
                    0{i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>

      <SectionIntro
        eyebrow="Built for"
        title={`Industries I build for in ${loc.city}`}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every industry has its own search behaviour, sales cycle, and
          customer mindset. I tailor every build to the local market.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger
          faster
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5"
        >
          {loc.industries.map((i) => (
            <FadeIn key={i}>
              <div className="group h-full rounded-3xl bg-neutral-50 p-6 transition hover:bg-neutral-100">
                <p className="font-display text-base font-semibold text-neutral-950">
                  {i}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      {loc.uniqueSections && (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeInStagger className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {loc.uniqueSections.map((s) => (
              <FadeIn key={s.heading}>
                <div className="rounded-3xl bg-neutral-50 p-10 h-full">
                  <h2 className="font-display text-2xl font-semibold text-neutral-950">{s.heading}</h2>
                  <p className="mt-6 text-base leading-relaxed text-neutral-700">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      )}

      <SectionIntro
        eyebrow="Services"
        title={`What I build for ${loc.city} businesses`}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every build starts local. Every local build starts with the search
          terms, the industries, and the actual buyers in {loc.city}.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Local-first websites',
              body: `Fast, modern Next.js builds with schema, SEO, and ranking strategy tuned for ${loc.city} search.`,
            },
            {
              title: 'Web apps & internal tools',
              body: `Custom dashboards, CRMs, and portals for ${loc.city} businesses that have outgrown off-the-shelf software.`,
            },
            {
              title: 'AI agents & automation',
              body: `Chatbots, lead qualifiers, content pipelines, and custom agents built around your workflow.`,
            },
            {
              title: 'SEO & content systems',
              body: `Local SEO strategy, on-page optimization, and automated publishing pipelines that keep ranking content flowing.`,
            },
            {
              title: 'Lead-gen pipelines',
              body: `Automated outreach that finds and contacts your ideal customers at scale, with personalized messaging per prospect.`,
            },
            {
              title: 'Redesigns & rebuilds',
              body: `Replatform from WordPress, Wix, or Squarespace onto a fast modern stack without losing SEO equity.`,
            },
          ].map((s) => (
            <FadeIn key={s.title}>
              <div className="h-full rounded-3xl bg-neutral-50 p-8 transition hover:bg-neutral-100">
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      {nearby.length > 0 && (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <div className="rounded-3xl bg-neutral-50 p-10">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Nearby service areas
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {nearby.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/locations/${n.slug}`}
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
                    >
                      {n.city}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-sm text-neutral-600">
                Also building for businesses across BC. See the full list on
                the{' '}
                <Link
                  href="/locations"
                  className="font-semibold underline underline-offset-4"
                >
                  locations page
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </Container>
      )}

      <ContactSection />
    </>
  )
}
