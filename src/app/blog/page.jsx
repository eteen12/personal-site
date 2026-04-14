import Link from 'next/link'

import { Border } from '../../components/Border'
import { ContactSection } from '../../components/ContactSection'
import { Container } from '../../components/Container'
import { FadeIn, FadeInStagger } from '../../components/FadeIn'
import { PageIntro } from '../../components/PageIntro'
import { formatDate } from '../../lib/formatDate'
import { loadArticles } from '../../lib/mdx'

export const metadata = {
  title: 'Kelowna Tech & Web Development Blog',
  description:
    'Kelowna-focused articles on web development, custom software, SEO, AI automation, and cold outreach pipelines. Real insight from a local Okanagan developer.',
  alternates: { canonical: 'https://ethanbdev.com/blog' },
  openGraph: {
    title: 'Kelowna Tech & Web Development Blog | EthanBDev',
    description:
      'Kelowna-focused articles on web development, custom software, SEO, AI automation, and cold outreach pipelines.',
    url: 'https://ethanbdev.com/blog',
    type: 'website',
  },
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

export default async function BlogIndex() {
  const articles = await loadArticles()

  return (
    <>
      <PageIntro eyebrow="The blog" title="Local tech, local voice.">
        <p>
          Practical articles on web development, custom software, AI
          automation, SEO, and cold outreach — written for businesses in
          Kelowna, Vernon, Kamloops, and across British Columbia.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          <FadeInStagger>
            {articles.map((article) => (
              <FadeIn key={article.href}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                          <Link href={article.href}>{article.title}</Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                            <time dateTime={article.date}>
                              {formatDate(article.date)}
                            </time>
                          </dd>
                          {article.author && (
                            <>
                              <dt className="sr-only">Author</dt>
                              <dd className="mt-6 flex gap-x-4">
                                <div className="text-sm text-neutral-950">
                                  <div className="font-semibold">
                                    {article.author}
                                  </div>
                                  {article.category && (
                                    <div className="text-neutral-600">
                                      {article.category}
                                    </div>
                                  )}
                                </div>
                              </dd>
                            </>
                          )}
                        </dl>
                        <p className="mt-6 max-w-2xl text-base text-neutral-600">
                          {article.description}
                        </p>
                        <Link
                          href={article.href}
                          className="mt-8 flex gap-x-3 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
                          aria-label={`Read more: ${article.title}`}
                        >
                          Read more
                          <ArrowIcon className="w-6 flex-none fill-current" />
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
