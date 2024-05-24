import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* inter.className přidá font do těla dokumentu, antialiased je třída z tailwind */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
