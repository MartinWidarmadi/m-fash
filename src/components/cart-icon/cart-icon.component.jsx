import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shopping-cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/115 - shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(ShoppingCartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
