import "../styles/globals.css";
import { Metadata } from "next";

import GoogleAnalytics from "@/components/molecules/GoogleAnalytics";
import GoogleTagManager from "@/components/molecules/GoogleTagManager";

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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-br" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
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
