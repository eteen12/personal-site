import Image from 'next/image'
import { HiArrowUpRight } from 'react-icons/hi2'

import { ContactSection } from '../../components/ContactSection'
import { Container } from '../../components/Container'
import { FadeIn } from '../../components/FadeIn'
import { GrayscaleTransitionImage } from '../../components/GrayscaleTransitionImage'
import { MDXComponents } from '../../components/MDXComponents'
import { PageIntro } from '../../components/PageIntro'
import { PageLinks } from '../../components/PageLinks'
import { loadCaseStudies } from '../../lib/mdx'

export default async function CaseStudyLayout({ caseStudy, children }) {
  let allCaseStudies = await loadCaseStudies()
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Project" title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
            {caseStudy.site && (
              <p className="mt-6 flex justify-center">
                <a
                  href={caseStudy.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Visit the live site!
                  <HiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </p>
            )}
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Industry</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Year</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Service</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                {caseStudy.previewImage ? (
                  <Image
                    src={caseStudy.previewImage}
                    alt={`${caseStudy.title} preview`}
                    className="h-auto w-full"
                    sizes="(min-width: 1280px) 76rem, 100vw"
                  />
                ) : (
                  <iframe
                    src={caseStudy.site}
                    width="100%"
                    height="800px"
                    frameBorder="0"
                  >
                    Your browser does not support iframes.
                  </iframe>
                )}
              </div>
              {!caseStudy.previewImage && (
                <p className="-my-px mx-auto max-w-[76rem]">
                  (Page load times may be slower due to embedding another
                  website.)
                </p>
              )}
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More projects"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  )
}
