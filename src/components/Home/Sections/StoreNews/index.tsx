"use client";
import * as Style from "./styles";
import { ProductsCarousel } from "@/components/ProductComponents/ProductsCarousel";

export function StoreNews() {
  return (
    <Style.StoreNewsContainer>
      <h2>Novidades Da Wizen</h2>
      <ProductsCarousel />
    </Style.StoreNewsContainer>
  );
}
