"use client"

import useIsMobile from "@/hooks/useIsMobile"

import { BottomNavigation } from "../BottomNavigation"
import { InformationBar } from "../InformationBar"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"
import * as Style from "./styles"

export function Header() {
  const isMobile = useIsMobile()

  /*
    {isMobile ? (
        <>
          <BottomNavigation />
        </>
      ) : (
        <p></p>
      )}

  */
  return (
    <>
      <Style.HeaderContainer>
        <InformationBar />
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </Style.HeaderContainer>

      {isMobile && <BottomNavigation />}
    </>
  )
}
