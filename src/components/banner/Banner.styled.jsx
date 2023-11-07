import styled from "@emotion/styled";
import img from "./img/Banner.jpg";

export const BannerStyle = styled.div `
  background-image: url(${img});
  width: 100%;
  min-height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`
export const BannerContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  color: ${props => props.theme.colors.white};
  max-width: 450px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 190px;
`
export const ClothingDescription = styled.p `
  font-size: ${props => props.theme.fontSize.medium};
`

export const PromotionTitle = styled.h2 `
  font-size: ${props => props.theme.fontSize.megaLarge};
  line-height: 93px;
  letter-spacing: -5px;
`