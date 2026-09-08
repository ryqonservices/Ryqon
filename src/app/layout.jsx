import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://www.ryqondigitals.com'),
  title: 'Ryqon Digitals | Build Better. Market Smarter. Grow Faster.',
  description: 'Ryqon Digitals builds products that get results — From Web & Mobile Applications to Marketing Growth. Web, Mobile Apps & Marketing Solutions for Brands, Startups, and Small Businesses.',
  keywords: ['Ryqon Digitals', 'Web Development', 'Mobile App Development', 'Digital Marketing', 'Software Solutions', 'Hyderabad Tech Agency'],
  openGraph: {
    title: 'Ryqon Digitals | Digital Solutions for Growth',
    description: 'We Build Products That Get Results — From Web & Mobile Applications to Marketing Growth.',
    url: 'https://www.ryqondigitals.com',
    siteName: 'Ryqon Digitals',
    images: [
      {
        url: '/logo-dark.png',
        width: 1024,
        height: 1024,
        alt: 'Ryqon Digitals Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryqon Digitals | Build Better. Market Smarter.',
    description: 'Web, Mobile Apps & Marketing Solutions for Brands and Startups.',
    images: ['/logo-dark.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#233be2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Ryqon Digitals",
              "image": "https://www.ryqondigitals.com/logo-dark.png",
              "@id": "https://www.ryqondigitals.com",
              "url": "https://www.ryqondigitals.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.3850,
                "longitude": 78.4867
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/ryqon_digital/reels/?hl=en",
                "https://www.facebook.com/profile.php?id=61587584260076",
                "https://www.linkedin.com/company/ryqon-services/"
              ]
            })
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col min-h-screen">
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
