import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Ryqon | Build Better. Market Smarter. Grow Faster.',
  description: 'We Build Products That Get Results — From Web & Mobile Applications to Marketing Growth. Web, Mobile Apps & Marketing Solutions for Brands, Startups, and Small Businesses.',
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
        <link rel="icon" type="image/png" sizes="32x32" href="/ryqon_icon.svg" />
        <link rel="icon" type="image/png" sizes="192x192" href="/ryqon_icon.svg" />
        <link rel="apple-touch-icon" href="/ryqon_icon.svg" />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
