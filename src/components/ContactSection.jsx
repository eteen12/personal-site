import { Button } from './Button'
import { Container } from './Container'
import { FadeIn } from './FadeIn'
import { Offices } from './Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Want to work together?
            </h2>
            <div className="mt-6 flex">
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
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Dont want to click?
              </h3>
              <p className="text-white">
                <strong>Contact Me:</strong>{' '}
                <a
                  href="mailto:ethan@ethanbdev.com"
                  className="text-white hover:underline"
                >
                  ethan@ethanbdev.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
