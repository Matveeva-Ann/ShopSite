import { ButtonStyle } from "./Button.styled";
import PropTypes from 'prop-types';


export default function Button ({children}){
  return (
    <ButtonStyle>{children}</ButtonStyle>
  )
}

Button.propTypes = {
  children: PropTypes.string,
}