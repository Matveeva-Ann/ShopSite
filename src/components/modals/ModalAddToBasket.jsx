import GoodItemLittle from "components/goods/GoodsItemLittle/GoodsItemLittle";
import Button from "./modalElements/Button";
import ModalBody from "./modalElements/ModalBody";
import ModalFooter from "./modalElements/ModalFooter";
import ModalHeader from "./modalElements/ModalHeader";
import ModalWrapper from "./modalElements/ModalWrapper";
import PropTypes from 'prop-types';

export default function ModalAddToBasket({ onClick, good, onClickBasket, countBasket }) {
  function addToBasket(){
    onClickBasket();
    onClick();
  }
  return (
    <ModalWrapper onClick={onClick}>
      <ModalHeader title='Add Product to basket'></ModalHeader>
      <ModalBody>
        <GoodItemLittle good={good} modalAddToBasket={true} countBasket={countBasket}></GoodItemLittle>
      </ModalBody>
      <ModalFooter>
        <Button onClick={addToBasket} btnColor='baseColor'>ADD TO BASKET</Button>
      </ModalFooter>
    </ModalWrapper>
  )
}

ModalAddToBasket.propTypes = {
  good: PropTypes.object,
  onClick: PropTypes.func,
  onClickBasketL: PropTypes.func,
  countBasket: PropTypes.func,
}