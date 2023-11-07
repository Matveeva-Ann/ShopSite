import Header from "components/header/Header";
import Banner from "components/banner/Banner";
import GoodsList from "components/goods/GoodsList/GoodsList";
import { useEffect, useState } from "react";

import './styleReset.css';
import './fonts/fonts.css';

export default function App() {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [basketCount, setBasketCount] = useState(0);

  //кількість товарів в вибраному при першому завантаженні 

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('favorite'));
    if (storedData) {
      setFavoriteCount(storedData.length);
    }
  }, [favoriteCount])

  //кількість товарів в корзині при першому завантаженні 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('basket'));
    if (storedData) {
      setBasketCount(storedData.reduce((accum, elem) => accum + Number(elem.amount), 0))
    }
  }, [basketCount])

  return (
    <>
      <Header
        favoriteCount={favoriteCount}
        setFavoriteCount={setFavoriteCount}
        basketCount={basketCount}
        setBasketCount={setBasketCount}
      ></Header>
      <Banner></Banner>
      <GoodsList category={'Women'} setFavoriteCount={setFavoriteCount} favoriteCount={favoriteCount} countBasket={setBasketCount}></GoodsList>
      <GoodsList category={'Men'} setFavoriteCount={setFavoriteCount} countBasket={setBasketCount}></GoodsList>
      <GoodsList category={'Children'} setFavoriteCount={setFavoriteCount} countBasket={setBasketCount}></GoodsList>
    </>
  )
}