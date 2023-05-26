"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { styled } from "styled-components"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Navigation, Pagination } from "swiper"

import { siteConfig } from "@/config/site"

const SlidesContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
`
const SlideImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Slide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function SliderBanners() {
  return (
    <>
      <SlidesContainer
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {siteConfig.banners.map((banner, index) => (
          <Slide key={index}>
            <Link href={banner.href}>
              <SlideImage
                src={`/images/banners/${banner.name}`}
                width={1000}
                height={1000}
                alt={banner.name || "Banner image"}
              />
            </Link>
          </Slide>
        ))}
      </SlidesContainer>
    </>
  )
}
