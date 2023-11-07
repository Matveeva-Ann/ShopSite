
import { iconSize } from "constants";
import IconButton from "containers/IconButton/IconButton";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from 'react';
import ModalFavorite from "components/modals/ModalFavorite";
import { CounterGoods } from "./Header.styled";
import PropTypes from 'prop-types';

export default function Favorite({favoriteCount, setFavoriteCount, setBasketCount}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //перемакач модалки
  function toggleModal() {
    setIsModalOpen(prevState => !prevState)
  }

  return (
    <>
      <IconButton aria-label='favorite' onClick={toggleModal} style={{position: 'relative'}}>
        {favoriteCount> 0 &&
          <CounterGoods>{favoriteCount}</CounterGoods>
        }
        <AiOutlineHeart size={iconSize.sm} style={{ color: '#807D7E' }}></AiOutlineHeart>
      </IconButton>
      {isModalOpen &&
        <ModalFavorite onClick={toggleModal} setFavoriteCount={setFavoriteCount} setBasketCount={setBasketCount}></ModalFavorite>
      }
    </>
  )
}


Favorite.propTypes = {
  setFavoriteCount: PropTypes.func,
  setBasketCount: PropTypes.func,
  favoriteCount: PropTypes.number,
}