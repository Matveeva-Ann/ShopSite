import styled from '@emotion/styled';

export const GoodLink = styled.a `
  cursor: pointer;
  text-decoration: none;
`

export const GoodImg = styled.img`
  max-width: 270px;
  max-height: 390px;
  border-radius: 10px;
`

export const GoodName = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.theme.fontSize.normal};
  font-weight: 600;
  line-height: 28px;
  color: ${props => props.theme.colors.blackText};
  margin-top: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;  
`
export const InfoBlock = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GoodPrice = styled.span `
  font-size: ${props => props.theme.fontSize.small};
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.accentText};
  font-family: Arial, Helvetica, sans-serif;
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`