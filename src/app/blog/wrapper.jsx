import Link from 'next/link'

import { ContactSection } from '../../components/ContactSection'
import { Container } from '../../components/Container'
import { FadeIn } from '../../components/FadeIn'
import { MDXComponents } from '../../components/MDXComponents'
import { PageIntro } from '../../components/PageIntro'
import { formatDate } from '../../lib/formatDate'

export default function BlogArticleLayout({ article, children }) {
  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Blog" title={article.title} centered>
            <p>{article.description}</p>
          </PageIntro>

          <Container className="mt-16 sm:mt-20 lg:mt-24">
            <FadeIn>
              <div className="mx-auto flex max-w-3xl flex-col items-center gap-y-2 text-sm text-neutral-600">
                <time
                  dateTime={article.date}
                  className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500"
                >
                  {formatDate(article.date)}
                </time>
                {article.author && (
                  <p className="font-display text-sm text-neutral-700">
                    By {article.author}
                  </p>
                )}
                {article.category && (
                  <p className="mt-2 inline-flex items-center rounded-full bg-neutral-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-700">
                    {article.category}
                  </p>
                )}
              </div>
            </FadeIn>
          </Container>
        </header>

        <Container className="mt-16 sm:mt-20 lg:mt-24">
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
            </div>
          </FadeIn>
        </Container>

        <Container className="mt-20">
          <FadeIn>
            <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 rounded-3xl bg-neutral-100 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-neutral-950">
                  Need something like this built for your business?
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Custom tech solutions for Kelowna and the Okanagan.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Start a project
              </Link>
            </div>
          </FadeIn>
        </Container>
      </article>

      <ContactSection />
    </>
  )
}
