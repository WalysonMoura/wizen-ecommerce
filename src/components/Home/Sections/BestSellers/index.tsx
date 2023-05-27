"use client";

import { ProductsCarousel } from "@/components/ProductComponents/ProductsCarousel";
import * as Style from "./styles";
type Product = {
  id: number;
  name: string;
  price: number;
};
export function BestSellers() {
  const products: Product[] = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 5.99 },
  ]
  return (
    <Style.BestSellersContainer>
      <h2>Mais vendidos</h2>
      <ProductsCarousel products={products} />
    </Style.BestSellersContainer>
  );
}
