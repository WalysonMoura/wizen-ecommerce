"use client"

import { styled } from "styled-components"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import Image from "next/image"

export const CategoriesContainer = styled(Swiper)`
  width: 100%;
  height: 400px;
`

export const CategoryItemContainer = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 5rem;
  height: 8rem;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Imagecategory = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
