import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '분리수거 알리미 | recycling.money-hotissue.com',
  description: '지역 분리수거 일정을 쉽게 확인하고 알림을 받아보세요',
  keywords: ['분리수거', '쓰레기', '배출일', '알리미'],
  icons: {
    icon: '♻️',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#667eea" />
        <meta name="description" content="지역 분리수거 일정을 쉽게 확인하고 알림을 받아보세요" />
        <meta name="apple-mobile-web-app-capable" content="true" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="분리수거 알리미" />
      </head>
      <body>
        <div className="w-screen h-screen overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
