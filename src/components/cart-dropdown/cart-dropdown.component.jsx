import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShoppingCartContext } from '../../context/shopping-cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.style';

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate('/checkout');

  return (
    <CartDropdownContainer>
      <CartItems>{cartItems.length ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />) : <EmptyMessage>Your cart is empty</EmptyMessage>}</CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECK OUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
