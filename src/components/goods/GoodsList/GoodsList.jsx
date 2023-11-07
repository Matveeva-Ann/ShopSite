import GoodItem from '../GoodItem/GoodItem';
import { GoodsCollectionTitle, GoodsCollectionWrapper, GoodsItemStyle, GoodsListStyle } from './GoodsList.styled';
import { useEffect, useState } from 'react';
import sendRequest from 'helpers/sendRequest';
import { urlGoods } from 'constants/urlGoodsCollection';
import { useLocalStorage } from 'helpers/hooks/useLocalStorage';
import PropTypes from 'prop-types';

export default function GoodsList({ category, setFavoriteCount, countBasket, favoriteCount }) {
  const [goodsCollection, setGoodsCollection] = useState([]);
  const [, setLocalStorageCollection] = useLocalStorage('favorite');

  // змінюємо масив товарів залежно від обраних користувачем товарів
  function updateGoodsWithFavorites(dataArr) {
    const favoriteData = JSON.parse(window.localStorage.getItem('favorite')) || [];
    const favoriteSkus = favoriteData.map(elem => elem.sku) || [];
    const updatedDataArr = dataArr.map(elem => ({
      ...elem,
      favorite: favoriteSkus.includes(elem.sku)
    }))
    return updatedDataArr;
  }
  // запит на отримання товарів з сервера з фільтрацією по категоріям
  useEffect(() => {
    sendRequest(urlGoods).then((data) => {
      const dataArr = data.filter(elem => elem.category === category);
      setGoodsCollection(updateGoodsWithFavorites(dataArr));
    })
  }, [category])

  //перерендер взалежності від того чи були видалені товари з обраного
  useEffect(()=>{
    setGoodsCollection(updateGoodsWithFavorites(goodsCollection))
  }, [favoriteCount])

  //додати в вибрані
  function addToFavorite(index) {
    const updateArr = [...goodsCollection];
    updateArr[index] = { ...updateArr[index], favorite: !updateArr[index].favorite };
    setGoodsCollection(updateArr)

    const favoritesArr = updateArr.filter((el) => el.favorite)
    setFavoriteCount(favoritesArr.length)
    setLocalStorageCollection(favoritesArr)
  }

  //додати в карзину
  function addToBasket(good) {
    good.amount = 1;
    const basketArr = JSON.parse(window.localStorage.getItem('basket')) || [];
    const existingItem = basketArr.find(elem => elem.sku === good.sku);

    existingItem ? existingItem.amount++ : basketArr.push(good);

    window.localStorage.setItem('basket', JSON.stringify(basketArr))
    countBasket(basketArr.reduce((accum, elem) => accum + Number(elem.amount), 0))
  }

  return (
    <GoodsCollectionWrapper>
      <GoodsCollectionTitle>Categories For {category}</GoodsCollectionTitle>
      <GoodsListStyle>
        {goodsCollection.map((elem, index) => (
          <GoodsItemStyle key={elem.sku}>
            <GoodItem good={elem}
              onClickFavorite={() => addToFavorite(index)}
              onClickBasket={() => addToBasket(elem)}
              countBasket={countBasket}
            ></GoodItem>
          </GoodsItemStyle>))
        }
      </GoodsListStyle>
    </GoodsCollectionWrapper>
  )
}

GoodsList.propTypes = {
  category: PropTypes.string,
  countFavorite: PropTypes.func,
  countBasket: PropTypes.func,
}