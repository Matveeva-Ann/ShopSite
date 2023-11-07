import { RxCross2 } from "react-icons/rx";
import './ModalClose.css';
import {iconSize} from 'constants';
import PropTypes from 'prop-types';

export default function ModalClose ({onClick}){
  return (
    <RxCross2 onClick={onClick} className='cross' size={iconSize.md}></RxCross2>
  )
}

ModalClose.propTypes = {
  onClick: PropTypes.func,
}