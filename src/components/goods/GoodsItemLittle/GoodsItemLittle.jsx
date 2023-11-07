import { iconSize } from "constants";
import { RxCross2 } from "react-icons/rx";
import { CountGoods, LittleGoodCard, LittleGoodDescriptionItem, LittleGoodImg, LittleGoodLink, LittleGoodName, LittleGoodPrice, LittleGoodsList, LittleInfoBlock, LittleTextWrapper } from "./GoodsItemLittle.styled";
import { BsFillBasket3Fill } from "react-icons/bs";
import { IconsWrapper } from "../GoodItem/GoodItem.styled";
import PropTypes from 'prop-types';
import IconButton from "containers/IconButton/IconButton";

export default function GoodItemLittle({ good, deleteFavorite, isBasket, deleteGood, addGoodToBasket, modalAddToBasket=false }) {

  return (
    <LittleGoodCard>
      <LittleGoodLink href="">
        <LittleGoodImg src={good.imagePath} alt={good.name} />
      </LittleGoodLink>
      <LittleTextWrapper>
        <LittleGoodName>{good.name}</LittleGoodName>
        {/* додаємо опис товару, якщо є на сервері */}
        {good.description &&
          <LittleGoodsList>
            {good.description.map((elem, index) => (
              <LittleGoodDescriptionItem key={index}>{elem}</LittleGoodDescriptionItem>
            ))
            }
          </LittleGoodsList>
        }

        <LittleInfoBlock>
          <LittleGoodPrice>{good.price}</LittleGoodPrice>
          {/*іконки залежно від того де використовується компонент, якщо модалка перед додаванням в корзину не відображаються взагалі*/}
          {!modalAddToBasket &&
            <IconsWrapper>
              {!isBasket
                ? <IconButton onClick={deleteFavorite} background='white' aria-label='remove from favorite'>
                  <RxCross2 size={iconSize.sm} style={{ color: '#807D7E' }} ></RxCross2>
                </IconButton>
                : <CountGoods>{good.amount} шт.</CountGoods>
              }
              {!isBasket
                ? <IconButton background='white' onClick={addGoodToBasket} aria-label='add to basket'>
                  <BsFillBasket3Fill style={{ color: '#807D7E' }} size='17'></BsFillBasket3Fill>
                </IconButton>
                : <IconButton background='white' onClick={deleteGood} aria-label='remove from basket'>
                  <RxCross2 style={{ color: '#807D7E' }} size='20'></RxCross2>
                </IconButton>
              }
            </IconsWrapper>
          }
        </LittleInfoBlock>
      </LittleTextWrapper>
    </LittleGoodCard>
  )
}

GoodItemLittle.propTypes = {
  good: PropTypes.object,
  onClick: PropTypes.func,
  isBasket: PropTypes.bool,
  deleteGood: PropTypes.func,
  setBasketCount: PropTypes.func,
  modalAddToBasket: PropTypes.bool,
}