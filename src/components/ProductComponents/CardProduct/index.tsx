"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

import { Product } from "@/types/woocommerce";

import * as Style from "./styles";
type pro = {
  id: number;
  name: string;
  price: number;
};
export function CardProduct({ product }: pro) {
  return (
    <div class="h-40 w-32 rounded-lg shadow-cardproduct ">
      <Image
        class="block w-full h-full"
        src="/images/products/caneca.jpg"
        width={1000}
        height={1000}
        alt=""
      />

      <div>
        <Style.PriceContent>
          <Style.PriceProduct>R$ 1.079,89</Style.PriceProduct>
        </Style.PriceContent>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-0.5">
            <FaStar size={10} color="#FFEF40" />
            <FaStar size={10} color="#FFEF40" />
            <FaStar size={10} color="#FFEF40" />
            <FaStar size={10} color="#FFEF40" />
            <FaStar size={10} color="#FFEF40" />
          </div>
          <span>105</span>
        </div>
        <h2>Caneca Naruto</h2>
      </div>
      <Style.AddCartButton>Adicionar ao Carrinho</Style.AddCartButton>
    </div>
  );
}
