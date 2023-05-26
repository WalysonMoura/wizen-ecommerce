import Image from "next/image"
import { styled } from "styled-components"

export const CardProductContainer = styled.div`
  height: 10rem;
  width: 8rem;
  border-radius: 18px;
  background: #e0e0e0;
  box-shadow: 34px 34px 68px #bebebe, -34px -34px 68px #ffffff;

  div {
    padding: 2rem 3rem;
  }
  margin-right: 20px;
`

export const TitleProduct = styled.h2``
export const PriceProduct = styled.h3``
export const PriceContent = styled.div``

export const ImageProduct = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
`

export const AddFavorites = styled.input``

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const AddCartButton = styled.button``
