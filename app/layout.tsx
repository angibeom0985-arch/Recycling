import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '분리수거 알리미',
  description: '지역 분리수거 일정을 쉽게 확인하고 알림을 받아보세요',
  keywords: ['분리수거', '쓰레기', '배출일', '알리미'],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '분리수거 알리미',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#667eea',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <div className="w-screen h-screen overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
