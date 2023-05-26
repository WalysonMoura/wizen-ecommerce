"use client";

import * as React from "react";
import Link from "next/link";
import * as Styles from "./styles";

import { Icons } from "@/components/icons";
import { MdAccountCircle } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import { BlogPost } from "@/types/blogPost";
import { getSingleBlogPost } from "@/services/notion";

//import { MainNav } from "./mainNav";

export function DesktopMenu() {
  return (
    <div class="w-full flex items-center justify-between">
      <FaMapMarkerAlt size={24} color="#009ED0" />
      {/**<Search/> */}

      <div class="flex items-center gap-8">
        <FaMapMarkerAlt size={24} color="#009ED0" />
        <div class="flex flex-col items-center justify-start">
          <span>Onde está meu pedido?</span>
          <h3>Rastrear Pedido</h3>
        </div>
      </div>

      <div class="flex items-center gap-8">
        {/**
         * Login
         */}
        <MdAccountCircle size={24} color="#009ED0" />
        <div class="flex flex-col items-center justify-start">
          <span>
            Descubra uma <strong>Experiência Personalizada!</strong>
          </span>

          <h3>
            Crie sua <strong>Conta</strong> agora ou faça seu
            <strong>Login</strong>
          </h3>
        </div>

      </div>


    </div>
  );
}
