import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Poppins,
  Lato,
  Nunito,
  Monospace,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});



const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-default",
});

const monospace = Monospace({
  variable: "--font-code",
});

const lato = Lato({
  variable: "--font-headings",
});

const montserrat = Montserrat({
  variable: "--font-highlights",
});

const open_sans = OpenSans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-navigation",
});

;
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-elegant",
});


const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-friendly",
});
