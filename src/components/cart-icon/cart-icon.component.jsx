import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shopping-cart.context';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(ShoppingCartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
