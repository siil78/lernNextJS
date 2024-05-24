// import fontu
import { Inter, Lusitana } from 'next/font/google';

// export konfigurovaného fontu
export const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});
