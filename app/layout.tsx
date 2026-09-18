import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { HeaderV4 } from "@/components/header-v4"
import { Footer } from "@/components/footer"
import { FloatingDona } from "@/components/floating-dona"
import { AccessibilityMenu } from "@/components/accessibility-menu"
import { VisitorCounter } from "@/components/visitor-counter"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const batangas = localFont({
  src: '../public/fonts/batangas-font-family-fontmirror/Batangas Bold 700.otf',
  variable: '--font-batangas-next',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.islacascajal.org'),
  title: 'Fundación Isla Cascajal | Construyendo UniverCiudad',
  description: 'Somos una organización creada en 2008 que trabaja por el desarrollo social de las comunidades más vulnerables a través de programas educativos, etnoeducativos, artístico culturales y de acompañamiento.',
  openGraph: {
    title: 'Fundación Isla Cascajal | Construyendo UniverCiudad',
    description: 'Somos una organización creada en 2008 que trabaja por el desarrollo social de las comunidades más vulnerables.',
    url: 'https://www.islacascajal.org',
    siteName: 'Fundación Isla Cascajal',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  generator: 'v0.app',
  keywords: ['fundación', 'ONG', 'desarrollo social', 'etnoeducación', 'Colombia', 'comunidades vulnerables', 'inclusión social'],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${batangas.variable}`}>
      <body className="font-sans antialiased bg-background overflow-x-hidden min-h-screen flex flex-col">
        <HeaderV4 />
        <main className="flex-1 flex flex-col w-full relative">
          {children}
        </main>
        <Footer />
        <FloatingDona />
        <AccessibilityMenu />
        <VisitorCounter initialCount={12450} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
        {/* Google Translate Integration */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'es',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <Script 
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="afterInteractive"
        />

      </body>
    </html>
  )
}
