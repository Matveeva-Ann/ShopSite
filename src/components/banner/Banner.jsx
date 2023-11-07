import Button from "containers/Button/Button";
import { BannerContent, BannerStyle, ClothingDescription, PromotionTitle } from "./Banner.styled";


export default function Banner() {
  return (
    <BannerStyle>
      <BannerContent>
        <ClothingDescription>T-shirt / Tops</ClothingDescription>
        <PromotionTitle>Summer Value Pack</PromotionTitle>
        <p>cool / colorful / comfy</p>
        <Button>Shop Now</Button>
      </BannerContent>
    </BannerStyle>
  )
}