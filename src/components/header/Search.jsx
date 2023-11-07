import { PiMagnifyingGlassBold } from "react-icons/pi";
import { InputSearch, InputSearchWrapper } from "./Header.styled";

export default function Search(){
  return(
    <InputSearchWrapper>
       <InputSearch type="text" placeholder="Search"/>
       <PiMagnifyingGlassBold style={{color: '#807D7E', position: 'absolute', left: '10px', top: '30%'}}/>
    </InputSearchWrapper> 
  )
}