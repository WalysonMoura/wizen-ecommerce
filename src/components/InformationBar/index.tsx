"use client";
import * as Style from "./styles";
import { MdPix } from 'react-icons/md';

export function InformationBar() {
  return (
    <Style.InformationBar>
      <Style.DiscountText>
        Oferta Imperdível: <strong>Economize 5%</strong> com Pagamentos em
        <strong>
          PIX! <MdPix size={24} />
        </strong>
      </Style.DiscountText>
    </Style.InformationBar>
  );
}
