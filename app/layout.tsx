import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const supermagic = localFont({
  src: [
    {
      path: '../public/fonts/Cafe24Supermagic-Regular-v1.0.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/Cafe24Supermagic-Bold-v1.0.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-supermagic',
});

export const metadata: Metadata = {
  title: '슬기로울지도',
  description: '우리나라 깊숙히 있는 먹거리를 찾아보아요~ 어쩌면 슬기로울지도?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${supermagic.variable}`}>{children}</body>
    </html>
  );
}
