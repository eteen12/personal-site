import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ContactSection } from '../../../components/ContactSection'
import { Container } from '../../../components/Container'
import { FadeIn, FadeInStagger } from '../../../components/FadeIn'
import { PageIntro } from '../../../components/PageIntro'
import { SectionIntro } from '../../../components/SectionIntro'
import { industries } from '../../../data/industries'

export async function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }))
}

export async function generateMetadata({ params }) {
  const { industry } = await params
  const ind = industries.find((i) => i.slug === industry)
  if (!ind) return {}
  const title = `${ind.name} Web Development & Tech Solutions | Kelowna BC`
  const description = `Custom websites, SEO, and tech solutions for ${ind.name.toLowerCase()} in Kelowna and across BC. Built by a local developer who actually ships.`
  return {
    title,
    description,
    alternates: {
      canonical: `https://ethanbdev.com/industries/${ind.slug}`,
    },
    openGraph: {
      title: `${title} | EthanBDev`,
      description,
      url: `https://ethanbdev.com/industries/${ind.slug}`,
      type: 'website',
    },
  }
}

export default async function IndustryPage({ params }) {
  const { industry } = await params
  const ind = industries.find((i) => i.slug === industry)
  if (!ind) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `EthanBDev — ${ind.name}`,
    url: `https://ethanbdev.com/industries/${ind.slug}`,
    areaServed: [
      { '@type': 'City', name: 'Kelowna' },
      { '@type': 'AdministrativeArea', name: 'British Columbia' },
    ],
    serviceType: [
      `${ind.name} Web Development`,
      `${ind.name} SEO`,
      'Custom Software',
      'AI Automation',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageIntro eyebrow={ind.name} title={ind.tagline}>
        <p>{ind.hero}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 px-6 py-16 sm:px-16 sm:py-20">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Common pain points I fix
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              What&apos;s wrong with most {ind.name.toLowerCase()} websites.
            </h2>
            <ul className="mt-10 grid gap-6 text-base text-neutral-300 sm:grid-cols-2">
              {ind.pains.map((p, i) => (
                <li key={i} className="flex gap-x-4">
                  <span className="font-display text-sm text-neutral-500">
                    0{i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>

      <SectionIntro
        eyebrow="What I build"
        title={`How I build for ${ind.name.toLowerCase()}`}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every build is tuned to how this industry actually gets found, sells,
          and closes — not a generic template dressed up for any business.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger
          faster
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2"
        >
          {ind.wins.map((w, i) => (
            <FadeIn key={i}>
              <div className="group h-full rounded-3xl bg-neutral-50 p-8 transition hover:bg-neutral-100">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                  0{i + 1}
                </p>
                <p className="mt-4 font-display text-lg font-semibold text-neutral-950">
                  {w}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      {ind.portfolioSlug && (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <div className="rounded-3xl bg-neutral-50 p-10">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Recent work in this industry
              </p>
              <p className="mt-6 max-w-2xl font-display text-2xl font-medium text-neutral-950">
                See a live {ind.name.toLowerCase()} build I delivered.
              </p>
              <Link
                href={`/portfolio/${ind.portfolioSlug}`}
                className="mt-6 inline-flex items-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                View portfolio project →
              </Link>
            </div>
          </FadeIn>
        </Container>
      )}

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-50 p-10">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Service areas
            </p>
            <p className="mt-6 max-w-2xl text-base text-neutral-700">
              I build for {ind.name.toLowerCase()} across BC — Kelowna,
              Vernon, Penticton, Kamloops, Vancouver, Victoria, and every
              city in between.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {['kelowna', 'west-kelowna', 'vernon', 'penticton', 'kamloops', 'vancouver', 'victoria', 'surrey', 'burnaby', 'nanaimo'].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/locations/${slug}`}
                    className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
                  >
                    {slug.split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join(' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
