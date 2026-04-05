import Portfolio from '../../components/Portfolio';

export const metadata = {
  title: 'Our Work | Ryqon Digitals',
  description: "Explore Ryqon Digitals' portfolio of web, mobile, and digital marketing projects. Real projects, real results.",
  openGraph: {
    title: 'Our Work | Ryqon Digitals',
    description: "Explore Ryqon Digitals' portfolio of web, mobile, and digital marketing projects. Real projects, real results.",
    url: 'https://www.ryqondigitals.com/portfolio',
    siteName: 'Ryqon Digitals',
    images: [
      {
        url: '/portfolio/og-portfolio.png', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Ryqon Digitals Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Portfolio />;
}
