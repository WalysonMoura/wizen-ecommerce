"use client"

// Import Swiper React components
import { SwiperSlide } from "swiper/react"

import * as Styles from "./styles"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper"

import { categories } from "@/config/site"

type CategoryItemProps = {
  title: string
  url: string
  image: string
}

export function Categories() {
  return (
    <Styles.CategoriesContainer
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <CategoryItem
            title={category.title}
            url={category.url}
            image={category.image}
          />
        </SwiperSlide>
      ))}
    </Styles.CategoriesContainer>
  )
}

function CategoryItem({ title, url, image }: CategoryItemProps) {
  return (
    <Styles.CategoryItemContainer>
      <Link href={url}>
        <Styles.Imagecategory
          src={image}
          width={1000}
          height={1000}
          alt={title || "Imagem da categoria"}
        />
      </Link>
    </Styles.CategoryItemContainer>
  )
}
