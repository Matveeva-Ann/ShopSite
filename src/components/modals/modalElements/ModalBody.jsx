import { ModalTextContent } from '../Modals.styled';
import PropTypes from 'prop-types';

export default function ModalBody ({children, text}){
  return (
    <ModalTextContent className='text'>
      {text}
      {children}
    </ModalTextContent>
  )
}

ModalBody.propTypes = {
  children: PropTypes.object,
  text: PropTypes.string,
}