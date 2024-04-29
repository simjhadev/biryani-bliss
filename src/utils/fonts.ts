import { Barlow_Condensed, Montserrat } from 'next/font/google';
 
export const barlow_condensed = Barlow_Condensed({
    subsets: ['latin'],
    weight: ['400','200','500'],
    variable: '--font-barlow-condensed',
})

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-montserrat',
})
 
/* const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
}) */