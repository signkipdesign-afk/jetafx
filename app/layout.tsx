import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JetaFX - Our Regulatory Details, Clearly Explained',
  description: 'JetaFX is a trading name of Jeta Global Ltd, licensed and regulated by the Financial Services Commission, Mauritius.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-[#FFB800] selection:text-black">
        {children}
      </body>
    </html>
  );
}
