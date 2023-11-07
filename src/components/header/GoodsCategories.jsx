import { useEffect, useState } from 'react';
import { urlCategories } from 'constants/urlGoodsCollection';
import sendRequest from 'helpers/sendRequest';

import { CategoriesLink, CategoriesList } from './Header.styled';

export default function GoodsCategories() {
  const [indexActive, setIndexActive] = useState(0);
  const [categories, setCategories] = useState([]);
  
  //отримання даних з сервера про категорії
  useEffect(() => {
    sendRequest(urlCategories).then(data => {
      setCategories(data)
    })
  }, [])

  return (
    <nav>
      <CategoriesList>
        {categories.map((category, index) => {
          return (
            <li key={category.name} onClick={() => setIndexActive(index)}>
              <CategoriesLink isActive={index === indexActive}>{category.name}</CategoriesLink>
            </li>
          )
        })}
      </CategoriesList>
    </nav>
  )
}