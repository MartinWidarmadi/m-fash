import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartContext } from '../../context/shopping-cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/shop/checkout" className="nav-link">
        <Button>GO TO CHECK OUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
