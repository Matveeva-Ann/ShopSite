import styled from "@emotion/styled";

export const HeaderStyle = styled.header `
   padding: ${props => props.theme.spacing(8)};
   /* background-color: #ffa4a4; */
`

export const HeadersElemWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  height: 45px;
  width: 100%;
  margin: 0 auto;
`
export const LogoWrapper = styled.h1 `
  position: relative;
  width: 110px;
  height: 45px;
  font-weight: 400;
`
export const LogoStyle = styled.span `
  font-size: ${props => props.theme.fontSize.large};
  font-family: 'Pacifico';
`
export const LogoLink = styled.a `
  color: ${props => props.theme.colors.blackText};
  cursor: pointer;
  text-decoration: none;
`
export const LogoText = styled.span `
  position: absolute;
  bottom: -12px;
  right: -14px;
  font-size: ${props => props.theme.fontSize.small};
  display: block;
`

export const CategoriesList = styled.ul `
  display: flex;
  gap: ${props => props.theme.spacing(5)};
  color: ${props => props.theme.colors.grayText};
  list-style: none;
  @media (width < 1100px ){
    display: none;
  }
`
export const CategoriesListBurger = styled.button `
  display: none;
  border-radius: 4px;
  border-color: ${props => props.theme.colors.grayText};
  padding: 8px 5px 0 5px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin: 0 20px;
  @media (width < 1100px ){
    display: block;
  }
`
export const CategoriesLink = styled.a `
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: ${props => props.isActive ? props.theme.colors.blackText :props.theme.colors.grayText};
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.medium};
  padding: 0 10px;
  font-weight: ${props => props.isActive ? 700 : 500 };
`
export const InputSearchWrapper = styled.div `
  position: relative;
  @media (width < 600px) {
    display: none;
  }
`
export const InputSearch = styled.input `
  max-width: 270px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundAccent};
  padding: ${props => props.theme.spacing(2.5)};
  font-size: 16px;
  outline: none;
  padding-left: ${props => props.theme.spacing(8)};
  font-family: Arial, Helvetica, sans-serif;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  
`
export const CounterGoods = styled.span `
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.baseColor};
  color: ${props => props.theme.colors.white};
  text-align: center;
  line-height: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.small};
`