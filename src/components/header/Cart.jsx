import ModalBasket from "components/modals/ModalBasket";
import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CounterGoods } from "./Header.styled";
import PropTypes from 'prop-types';

export default function Cart({basketCount, setBasketCount }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggle (){
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <IconButton aria-label='shopping cart' onClick={toggle} style={{position: 'relative'}}>
        <AiOutlineShoppingCart size={iconSize.sm} style={{ color: '#807D7E' }}></AiOutlineShoppingCart>
        {basketCount> 0 &&
          <CounterGoods>{basketCount}</CounterGoods>
        }
      </IconButton>
      {isModalOpen &&
      <ModalBasket onClick={()=>toggle()} setBasketCount={setBasketCount}></ModalBasket>
      }
    </>

  )
}

Cart.propTypes = {
  setBasketCount: PropTypes.func,
  basketCount: PropTypes.number,
}