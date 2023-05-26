"use client";

import * as React from "react";
import Link from "next/link";
import * as Styles from "./styles";
//import { getPublishedBlogPosts } from "@/services/notion"
//import { useQuery } from "react-query"

//import { BlogPost } from "@/types/blogPost"


import { Icons } from "@/components/icons";
import { MdAccountCircle } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import { BlogPost } from "@/types/blogPost";
import { getSingleBlogPost } from "@/services/notion";

import { MainNav } from "./mainNav";

export function DesktopMenu() {
  return (
    <Styles.Container>
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
    </Styles.Container>
  );
}
