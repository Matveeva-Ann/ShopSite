import styled from "@emotion/styled";

export const IconButtonStyle = styled.button `
  border: none;
  background-color: ${props => props.theme.colors[props.background]};
  width: 44px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover{
    background-color: ${props => 
                  props.background !== 'white' 
                  ? props.theme.colors.backgroundAccentHover 
                  : props.theme.colors.white};
  }
  &:active{
    transform: scale(1.02);
  }
`