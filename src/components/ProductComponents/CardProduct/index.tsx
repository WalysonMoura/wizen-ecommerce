"use client";

import { FaStar } from "react-icons/fa";

import { Product } from "@/types/woocommerce";

import * as Style from "./styles";
type pro = {
  product: [];
};
export function CardProduct({ product }: pro) {
  return (
    <Style.CardProductContainer>
      <Style.ImageProduct
        src="/images/products/caneca.jpg"
        width={1000}
        height={1000}
        alt=""
      />
      <Style.AddFavorites></Style.AddFavorites>
      <div>
        <Style.PriceContent>
          <Style.PriceProduct>R$ 1.079,89</Style.PriceProduct>
        </Style.PriceContent>

        <Style.Stars>
          <div>
            <FaStar size={10} color="#FFEF40" />
            <FaStar size={10} color="#FFEF40" />
            <FaStar size={10} color="#FFEF40" />
            <FaStar size={10} color="#FFEF40" />
            <FaStar size={10} color="#FFEF40" />
          </div>
          <span>105</span>
        </Style.Stars>
        <Style.TitleProduct>Caneca Naruto</Style.TitleProduct>
      </div>
      <Style.AddCartButton>Adicionar ao Carrinho</Style.AddCartButton>
    </Style.CardProductContainer>
  );
}
