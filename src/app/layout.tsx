import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scrooge',
  description: 'Manage your wealth simple',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-screen min-h-screen dark`}>
        {children}
      </body>
    </html>
  );
}
