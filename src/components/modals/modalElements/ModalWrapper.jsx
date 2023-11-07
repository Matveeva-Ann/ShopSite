
import ModalClose from './ModalClose/ModalClose';
import { ModalBg, ModalContainer } from '../Modals.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function ModalWrapper ({children, onClick}){
  function closeModal (event) {
    if (event.target.getAttribute('data-modal')){
      onClick();
    }
  }

  const modalRoot = document.querySelector('#modal-root');
  
  return (
    createPortal(
      <ModalBg data-modal="true" onClick={(event) => closeModal(event)}>
      <ModalContainer>
        <ModalClose onClick={onClick}></ModalClose>
        {children}
      </ModalContainer>
    </ModalBg>, modalRoot)
  )
}

ModalWrapper.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func,
}