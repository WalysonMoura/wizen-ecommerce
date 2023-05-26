"use client";

import useIsMobile from "@/hooks/useIsMobile";

import { BottomNavigation } from "../BottomNavigation";
import { InformationBar } from "../InformationBar";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
//import * as Styles from "./styles";

export function Header() {
  const isMobile = useIsMobile();
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
      <header class="sticky top-0 z-40 w-full bg-header">
        <InformationBar />
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </header>

      {isMobile && <BottomNavigation />}
    </>
  );
}
