import { IconButtonStyle } from "./IconButton.styled";
import PropTypes from 'prop-types';

export default function IconButton ({ background, onClick, children, ...allyProps}){

  return(
    <IconButtonStyle type="button" {...allyProps} onClick={onClick}>
      {children}
    </IconButtonStyle>
  )
}

IconButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  background: PropTypes.string,
  onClick: PropTypes.func,
  allyProps: PropTypes.object,
}