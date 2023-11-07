import Cart from "./Cart";
import Favorite from "./Favorite";
import GoodsCategories from "./GoodsCategories";
import { CiMenuBurger } from "react-icons/ci";
import Logo from "./Logo";
import Search from "./Search";

import { ButtonsWrapper, CategoriesListBurger, HeadersElemWrapper, HeaderStyle } from "./Header.styled";
import PropTypes from 'prop-types';

export default function Header({favoriteCount, setFavoriteCount, basketCount, setBasketCount}) {

  return (
    <HeaderStyle>
      <HeadersElemWrapper>
        <Logo></Logo>
        <GoodsCategories></GoodsCategories>
        <CategoriesListBurger>
          <CiMenuBurger size={28}></CiMenuBurger>
        </CategoriesListBurger>
        <Search></Search>
        <ButtonsWrapper>
          <Favorite favoriteCount={favoriteCount} setFavoriteCount={setFavoriteCount} setBasketCount={setBasketCount}></Favorite>
          <Cart basketCount={basketCount} setBasketCount={setBasketCount}></Cart>
        </ButtonsWrapper>
      </HeadersElemWrapper>
    </HeaderStyle>
  )
}

Header.propTypes = {
  setFavoriteCount: PropTypes.func,
  setBasketCount: PropTypes.func,
  favoriteCount: PropTypes.number,
  basketCount: PropTypes.number,
}