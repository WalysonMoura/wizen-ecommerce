"use client"

import * as React from "react"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { defaultTheme } from "@/styles/themes/default";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <StyledThemeProvider theme={defaultTheme}>
        {children}
      </StyledThemeProvider>
    </NextThemesProvider>
  )
}
