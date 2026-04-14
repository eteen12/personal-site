import { RootLayout } from '../components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s | EthanBDev',
    default: 'Tech Solutions in Kelowna, BC | EthanBDev',
  },
  description:
    'Ethan Breitkreutz delivers tech solutions for businesses in Kelowna, BC — custom websites, web apps, AI-powered automation, and SEO services across the Okanagan and Canada.',
  metadataBase: new URL('https://ethanbdev.com'),
  openGraph: {
    siteName: 'EthanBDev',
    locale: 'en_CA',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'EthanBDev',
  url: 'https://ethanbdev.com',
  description:
    'Tech solutions for businesses in Kelowna, BC — custom websites, web apps, AI-powered automation, and SEO services for local businesses across the Okanagan and Canada.',
  email: 'ethan@ethanbdev.com',
  areaServed: [
    {
      '@type': 'City',
      name: 'Kelowna',
      containedInPlace: {
        '@type': 'State',
        name: 'British Columbia',
        containedInPlace: { '@type': 'Country', name: 'Canada' },
      },
    },
    { '@type': 'Country', name: 'Canada' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Ethan Breitkreutz',
    email: 'ethan@ethanbdev.com',
    sameAs: [
      'https://www.instagram.com/ethan_breitkreutz/',
      'https://www.linkedin.com/in/ethan-breitkreutz/',
      'https://www.youtube.com/@Ethan-Breitkreutz',
      'https://x.com/12Eteen',
      'https://github.com/eteen12',
    ],
  },
  serviceType: [
    'Web Development',
    'Web Design',
    'Web App Development',
    'AI Automation',
    'SEO',
    'Website Redesign',
    'Custom Software Solutions',
    'Tech Consulting',
  ],
  priceRange: '$$',
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="EthanBDev" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
