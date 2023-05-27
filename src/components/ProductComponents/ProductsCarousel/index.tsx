"use client";

import { CardProduct } from "../CardProduct";
import * as Style from "./styles";
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Key } from "react";
import { SwiperSlide } from "swiper/react";

import { Product } from "@/types/woocommerce";

export function ProductsCarousel({ products }: { products: Product[] }) {
  return (
    <Style.SlidesContainer
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
    >
   
      {products.map((product,index) => (
        <SwiperSlide key={index}>
          <CardProduct product={product} />
        </SwiperSlide>
      ))}
      

    </Style.SlidesContainer>
  );
}
