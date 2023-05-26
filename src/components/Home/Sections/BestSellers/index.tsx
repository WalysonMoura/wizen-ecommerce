"use client" 

import { ProductsCarousel } from "@/components/ProductComponents/ProductsCarousel";
import * as Style from "./styles";

export function BestSellers() {
  return (
    <Style.BestSellersContainer>
      <h2>Mais vendidos</h2>
      <ProductsCarousel products={[]} />
    </Style.BestSellersContainer>
  );
}
