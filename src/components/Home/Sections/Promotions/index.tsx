"use client";
import * as Style from "./styles";
import { getCurrentMonth } from "@/utils/getCurrentMonth";

import { ProductsCarousel } from "@/components/ProductComponents/ProductsCarousel";
type Product = {
  id: number;
  name: string;
  price: number;
};
export function Promotions() {
  const products: Product[] = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 5.99 },
  ]
  return (
    <Style.PromotionsContainer>
      <h2>Promoções de {currentMonth}</h2>
      <ProductsCarousel  products={products}/>
    </Style.PromotionsContainer>
  );
}
