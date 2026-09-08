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
        url: '/ryqon_logo_new.png',
        width: 1200,
        height: 630,
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
    images: ['/ryqon_logo_new.png'],
  },
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
        <link rel="icon" type="image/png" sizes="32x32" href="/ryqon_favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/ryqon_favicon.png" />
        <link rel="apple-touch-icon" href="/ryqon_favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Ryqon Digitals",
              "image": "https://www.ryqondigitals.com/ryqon_logo_new.png",
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
