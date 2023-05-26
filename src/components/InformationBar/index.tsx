"use client";

import * as Styles from "./styles";
import { MdPix } from 'react-icons/md';

export function InformationBar() {
  return (
    <Styles.InformationBar>
      <Styles.DiscountText>
        Oferta Imperdível: <strong>Economize 5%</strong> com Pagamentos em
        <strong>
          PIX! <MdPix size={24} />
        </strong>
      </Styles.DiscountText>
    </Styles.InformationBar>
  );
}
