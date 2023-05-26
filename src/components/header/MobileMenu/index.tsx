"use client"

import Link from "next/link"
import { Settings2 } from "lucide-react"
import { BiMenuAltLeft } from "react-icons/bi"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"

import { siteConfig } from "@/config/site"
import useIsMobile from "@/hooks/useIsMobile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Icons } from "@/components/icons"

import * as Styles from "./styles"

export function MobileMenu() {
  const isMobile = useIsMobile()
  return (
    <Styles.MobileMenuContainer>
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.fullLogo className="h-10 " />
      </Link>
      {/**<Search/> */}
      <Styles.Tracking>
        <FaMapMarkerAlt size={24} color="#009ED0" />
        <div>
          <span>Onde está meu pedido?</span>
          <h3>Rastrear Pedido</h3>
        </div>
      </Styles.Tracking>
      <Styles.Account>
        {/**
         * Login
         */}
        <MdAccountCircle size={24} color="#009ED0" />
        <div>
          <span>
            Descubra uma <strong>Experiência Personalizada!</strong>
          </span>

          <h3>
            Crie sua <strong>Conta</strong> agora ou faça seu
            <strong>Login</strong>
          </h3>
        </div>
      </Styles.Account>
    </Styles.MobileMenuContainer>
  )
}
