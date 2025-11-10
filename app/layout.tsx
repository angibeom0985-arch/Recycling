import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '분리수거 알리미 | recycling.money-hotissue.com',
  description: '지역 분리수거 일정을 쉽게 확인하고 알림을 받아보세요',
  keywords: ['분리수거', '쓰레기', '배출일', '알리미'],
  manifest: '/manifest.json',
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>♻️</text></svg>" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <div className="w-screen h-screen overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
