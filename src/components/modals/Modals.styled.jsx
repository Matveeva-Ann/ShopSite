
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

export const BtnWrapperHome = styled.div`
   display: flex;
   justify-content: center;
   gap: 20px;
`

export const ModalBg = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.434); 
`
const modalAnimation = keyframes`
   0% {
     transform: translate(-50%, -50%) scale(0.9);
   }
   100% {
     transform: translate(-50%, -50%) scale(1);
   }
`
export const ModalContainer = styled.div`
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   max-width: 540px;
   max-height: 90vh;
   width: 100%;
   min-height: 200px;
   padding: ${props => props.theme.spacing(5)};
   background-color: #fff;
   border-radius: 16px;
   animation-name: ${modalAnimation};
   animation-fill-mode: forwards;
   animation-duration: 200ms;
`
export const ProductImg = styled.img`
   width: 280px;
   height: 140px;
   display: block;
   margin: 30px auto 85px;
`
export const ModalTitle = styled.h2 `
   font-size: 32px;
   font-weight: 500;
   color: ${props => props.theme.colors.black};
   text-align: center;
   font-family: Arial, Helvetica, sans-serif;
   margin: 0 0 ${props => props.theme.spacing(5)};
` 

export const BtnWrapperFooter = styled.div`
   display: flex;
   justify-content: center;
   gap: 64px;
   margin: 56px;
`
export const ModalTextContent = styled.div `
 font-size: 16px;
   font-weight: 500;
   font-family: Arial, Helvetica, sans-serif;
   color: #7F7F7F;
   text-align: center;
   margin: 0 auto 64px;
   max-width: 440px;
`


export const ModalBtn = styled.button`
   cursor: pointer;
   background-color: ${(props) => (props.btnColor === 'baseColor' ? props.theme.colors.baseColor : props.theme.colors.white)};
   color: ${(props) => (props.btnColor === 'baseColor' ?  props.theme.colors.white : props.theme.colors.baseColor)};
   border: ${(props) => (props.btnColor === 'baseColor' ? 'none' : `1px solid ${props.theme.colors.baseColor}`)};
   font-size: 16px;
   padding: 10px 40px;
   border-radius: 8px;
   text-transform: uppercase;
   transition: transform 250ms linear;
    &:active{
     transform: scale(1.1);
   }
`
export const ModalListStyle = styled.ul `
   padding: 0;
   overflow: auto;
   max-height: 70vh;
`