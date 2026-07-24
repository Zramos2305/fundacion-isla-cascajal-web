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
  title: 'Fundación Isla Cascajal | Construyendo UniverCiudad',
  description: 'Somos una organización creada en 2008 que trabaja por el desarrollo social de las comunidades más vulnerables a través de programas educativos, etnoeducativos, artístico culturales y de acompañamiento.',
  generator: 'v0.app',
  keywords: ['fundación', 'ONG', 'desarrollo social', 'etnoeducación', 'Colombia', 'comunidades vulnerables', 'inclusión social'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
                  includedLanguages: 'es,en',
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
