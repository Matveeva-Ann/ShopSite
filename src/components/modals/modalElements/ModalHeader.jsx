import { ModalTitle } from '../Modals.styled';
import PropTypes from 'prop-types';

export default function ModalHeader({ title, children }) {
  return (
    <>
      <ModalTitle>{title}</ModalTitle>
      {children}
    </>
  )
}

ModalHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}