import GoodItemLittle from "components/goods/GoodsItemLittle/GoodsItemLittle";
import ModalBody from "./modalElements/ModalBody";
import ModalHeader from "./modalElements/ModalHeader";
import ModalWrapper from "./modalElements/ModalWrapper";
import { ModalListStyle } from "./Modals.styled";
import { PiSmileySadLight } from "react-icons/pi";
import { useLocalStorage } from "helpers/hooks/useLocalStorage";
import { useState } from "react";
import PropTypes from 'prop-types';

export default function ModalFavorite({ onClick, setFavoriteCount, setBasketCount }) {
  const [favorites, setFavorites] = useState(JSON.parse(window.localStorage.getItem('favorite')) || []);
  const [, setLocalStorageCollection] = useLocalStorage('favorite');

  //видалити з обраного
  function deleteFavorite(index) {
    const updateArr = [...favorites];
    updateArr[index] = { ...updateArr[index], favorite: !updateArr[index].favorite };
    const favoritesArr = updateArr.filter((el) => el.favorite)
    setFavorites(favoritesArr)
    setFavoriteCount(favoritesArr.length)
    setLocalStorageCollection(favoritesArr);
  }

  // додати в корзину
  function addGoodToBasket(good) {
    good.amount = 1;
    const basketArr = JSON.parse(window.localStorage.getItem('basket')) || [];
    const existingItem = basketArr.find(elem => elem.sku === good.sku);

    existingItem ? existingItem.amount++ : basketArr.push(good);

    window.localStorage.setItem('basket', JSON.stringify(basketArr))
    setBasketCount(basketArr.reduce((accum, elem) => accum + Number(elem.amount), 0))
  }

  return (
    <ModalWrapper onClick={onClick}>
      <ModalHeader title={favorites.length > 0 ? 'Your chosen products' : 'Your favorites list is currently empty.'}>
        {favorites.length === 0 && <PiSmileySadLight size={50} style={{ margin: '35px auto 0', display: 'block' }}></PiSmileySadLight>}
      </ModalHeader>
      <ModalBody>
        <ModalListStyle>
          {favorites.map((elem, index) =>
          (<GoodItemLittle
            good={elem}
            key={elem.sku}
            deleteFavorite={() => deleteFavorite(index)}
            addGoodToBasket={() => addGoodToBasket(elem)}
          ></GoodItemLittle>))
          }
        </ModalListStyle>
      </ModalBody>
    </ModalWrapper>
  )
}

ModalFavorite.propTypes = {
  onClick: PropTypes.func,
  setFavoriteCount: PropTypes.func,
  setBasketCount: PropTypes.func,
}