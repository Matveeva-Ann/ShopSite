import { ModalBtn } from '../Modals.styled';
import PropTypes from 'prop-types';

export default function Button({ children, onClick, btnColor }) {
  return (
    <ModalBtn type="button" onClick={onClick} btnColor={btnColor}>
      {children}
    </ModalBtn>
  )
} 

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  btnColor: PropTypes.string,
}