"use client";

import * as Styles from "./styles";
import { MdPix } from "react-icons/md";

export function InformationBar() {
  return (
    <div class="h-6 w-full bg-informationBar text-white2 p-2 flex justify-center items-center text-base">
      <span class="font-bold italic">
        Oferta Imperdível: <strong class="text-darkBlue">Economize 5%</strong>{" "}
        com Pagamentos em
        <strong class="text-darkBlue">
          PIX! <MdPix size={24} />
        </strong>
      </span>
    </div>
  );
}
