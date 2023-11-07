import { useState } from 'react';

  export const useUpdateFavorites = (index, key) =>{
    const [state, setState] = useState(JSON.parse(window.localStorage.getItem(key))) || [];

    const updatedState = [...state];
    updatedState[index] = { ...updatedState[index], favorite: !updatedState[index].favorite };
    const filteredState = updatedState.filter((el) => el.favorite);
  
    setState(filteredState);
    window.localStorage.setItem(key, JSON.stringify(state))
    return [state, setState];
  }


//   function addToFavorite(index) {
//     const updateArr = [...goodsCollection];
//     updateArr[index] = { ...updateArr[index], favorite: !updateArr[index].favorite };
//     setGoodsCollection(updateArr)

//     const favoritesArr = updateArr.filter((el) => el.favorite)
//     countFavorite(favoritesArr.length)
//     setLocalStorageCollection(favoritesArr)
//   }  
  
//   function deleteFavorite(index) {
//     const updateArr = [...favorites];
//     updateArr[index] = { ...updateArr[index], favorite: !updateArr[index].favorite };
//     const favoritesArr = updateArr.filter((el) => el.favorite)
//     setFavorites(favoritesArr)
//     setFavoriteCount(favoritesArr.length)
//     setLocalStorageCollection(favoritesArr);
//   } 