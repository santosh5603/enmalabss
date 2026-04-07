import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Enma Labs | AI Chief of Staff for CA Firms',
  description: 'Connect your firm to an AI that reads invoices, reconciles bank statements, handles tax queries, and onboards clients — all through Telegram.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
