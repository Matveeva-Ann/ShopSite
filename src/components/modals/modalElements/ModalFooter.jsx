import { BtnWrapperFooter } from '../Modals.styled';
import PropTypes from 'prop-types';

export default function ModalFooter({ children }) {
  return (
    <BtnWrapperFooter>
      {children}
    </BtnWrapperFooter>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.object,
}