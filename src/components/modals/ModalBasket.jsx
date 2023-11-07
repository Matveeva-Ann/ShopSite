import GoodItemLittle from "components/goods/GoodsItemLittle/GoodsItemLittle";
import ModalBody from "./modalElements/ModalBody";
import ModalHeader from "./modalElements/ModalHeader";
import ModalWrapper from "./modalElements/ModalWrapper";
import { ModalListStyle } from "./Modals.styled";
import { PiSmileySadLight } from "react-icons/pi";
import PropTypes from 'prop-types';
import { useLocalStorage } from "helpers/hooks/useLocalStorage";

export default function ModalBasket({ onClick, setBasketCount, countBasket }) {
  const [goodsInBasket, setGoodsInBasket] = useLocalStorage('basket') || [];

  // видалення товару з корзини
  function deleteGoodInBasket(sku) {
    let updateArr = [...goodsInBasket];
    updateArr = updateArr.filter(elem => elem.sku !== sku);
    setGoodsInBasket(updateArr)
    setBasketCount(updateArr.reduce((accum, elem) => accum + Number(elem.amount), 0))
  }

  return (
    <ModalWrapper onClick={onClick}>
      <ModalHeader title={goodsInBasket.length > 0 ? 'Your chosen products' : 'Your cart is empty. Add items to start shopping.'}>
        {goodsInBasket.length === 0 &&
          <PiSmileySadLight size={50} style={{ margin: '35px auto', display: 'block' }}></PiSmileySadLight>
        }
      </ModalHeader>
      <ModalBody>
        <ModalListStyle>
          {goodsInBasket.map((elem) =>
          (<GoodItemLittle
            isBasket={true}
            good={elem}
            key={elem.sku}
            deleteGood={() => deleteGoodInBasket(elem.sku)}
          ></GoodItemLittle>)
          )}
        </ModalListStyle>
      </ModalBody>
    </ModalWrapper>
  )
}

ModalBasket.propTypes = {
  onClick: PropTypes.func,
  setBasketCount: PropTypes.func,
  countBasket: PropTypes.func,
}