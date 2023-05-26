"use client"
import * as Style from "./styles";
import { ProductsCarousel } from "@/components/ProductComponents/ProductsCarousel";


export function PersonalizedOffers() {
  return (
    <Style.PersonalizedOffersContainer>
      <h2>Ofertas Personalizadas para Você</h2>
      <ProductsCarousel />
    </Style.PersonalizedOffersContainer>
  );
}
