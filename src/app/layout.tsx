import "../styles/globals.css";
import { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Roboto_Mono,
  Roboto,
 
  Montserrat,
  Lato,
  Open_Sans,
  Nunito,
  Poppins
} from "next/font/google";

//import GoogleAnalytics from "@/components/molecules/GoogleAnalytics";
//import GoogleTagManager from "@/components/molecules/GoogleTagManager";

import { ButtonWhatsapp } from "../components/ButtonWhatsapp";
import { Typebot } from "../components/Typebot";
import { Header } from "../components/header";
import { TailwindIndicator } from "../components/tailwind-indicator";
//import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from "../components/theme-provider";
import { siteConfig } from "../config/site";
import { fontSans } from "../lib/fonts";
import { cn } from "../lib/utils";
import StyledJsxRegistry from "./registry";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

//const queryClient = new QueryClient();


const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: "swap",
  variable: "--font-poppins",
})

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: "swap",
  variable: "--font-roboto-mono",
});

const roboto = Roboto({
  variable: "--body-font",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  display: "swap",
});

 //const lato = Lato({
  //variable: "--headings-font",
 // weight: ['100', '300', '400', '500', '700', '900'],
 // subsets: ["latin"],
//});

 const  montserrat = Montserrat({
  variable: "--highlights-font",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--navigation-font",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  display: "swap",
});
const playfairDisplay = Playfair_Display({
  variable: "--elegant-font",
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--friendly-font",
  weight: [`200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `1000`, ],
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="pt-br"
        className={`${poppins.variable} ${roboto_mono.variable}`}
        suppressHydrationWarning
      >
        <head />
        <body className="min-h-screen bg-background font-default antialiased">
          {/**
           * <GoogleTagManager />
          <GoogleAnalytics />
           */}

          <StyledJsxRegistry>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col pb-10">
                <Header />
                <ButtonWhatsapp />
                <Typebot />
                <div className="flex-1">{children}</div>
                {
                  //<Footer/>
                }
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </StyledJsxRegistry>
        </body>
      </html>
    </>
  );
}
