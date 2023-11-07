import styled from '@emotion/styled';

export const GoodsCollectionWrapper = styled.div `
  max-width: 1260px;
  margin: 100px auto;
  padding: 0 10px;
`

export const GoodsCollectionTitle = styled.h3 `
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.subTitle};
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${props => props.theme.colors.accentText};
  position: relative;
  margin-left: 20px;
  margin-bottom: 70px;
  &::before{
    content: '';
    display: block;
    width: 6px;
    height: 30px;
    background-color: ${props => props.theme.colors.baseColor};
    border-radius: 10px;
    position: absolute;
    left: -20px;
  }
`
export const GoodsListStyle = styled.ul `
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  padding: 0;
  gap: 50px;
  
  @media (width < 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (width <  950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (width <  640px) {
    grid-template-columns: repeat(1, 1fr);
  }
` 

export const GoodsItemStyle = styled.li `
  list-style: none;
  max-width: 270px;
  align-self: center;
  margin: 0 auto;
`