"use client";

import * as Styles from "./styles";

import useIsMobile from "@/hooks/useIsMobile";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
/*
const renderIcon = (icon) => {
  switch (icon) {
    case "RiTruckLine":
      return <RiTruckLine size={24} />;
    // Adicione mais casos conforme necessário para outros ícones
    default:
      return null;
  }
};

 {renderIcon(item.icon)}

 import { RiTruckLine } from "react-icon/ri";
import { AiOutlineShoppingCart } from "react-icon/ai";
import { IoIosHeart  } from "react-icon/io";
*/



export function FeaturesBenefits() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <ContainerSlide
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Styles.Card>
            <Styles.Title>Frete Grátis</Styles.Title>
            <Styles.Description>Entrega para todo o Brasil.</Styles.Description>
           
          </Styles.Card>
        </SwiperSlide>

        <SwiperSlide>
          <Styles.Card>
            <Styles.Title>Pagamento Seguro</Styles.Title>
            <Styles.Description>
              Opções de pagamento seguras e confiáveis.
            </Styles.Description>
            
          </Styles.Card>
        </SwiperSlide>

        <SwiperSlide>
          <Styles.Card>
            <Styles.Title>Produtos de Qualidade</Styles.Title>
            <Styles.Description>
              Garantia de produtos de alta qualidade.
            </Styles.Description>
            
          </Styles.Card>
        </SwiperSlide>
      </ContainerSlide>
    );
  }

  return (
    <Styles.Container>
      <Styles.Card>
        <Styles.Title>Frete Grátis</Styles.Title>
        <Styles.Description>Entrega para todo o Brasil</Styles.Description>
       
      </Styles.Card>

      <Styles.Card>
        <Styles.Title>Pagamento Seguro</Styles.Title>
        <Styles.Description>
          Opções de pagamento seguras e confiáveis
        </Styles.Description>
       
      </Styles.Card>

      <Styles.Card>
        <Styles.Title>Produtos de Qualidade</Styles.Title>
        <Styles.Description>
          Garantia de produtos de alta qualidade
        </Styles.Description>
        
      </Styles.Card>
    </Styles.Container>
  );
}
