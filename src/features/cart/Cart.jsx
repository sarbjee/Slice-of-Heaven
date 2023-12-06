import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 bg-green-100"> {/* Olive-like background */}
      <LinkButton to="/menu" className="text-green-700">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold text-green-800">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-green-300 border-b border-green-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary" className="bg-green-600 text-white hover:bg-green-700">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())} className="bg-red-500 text-white hover:bg-red-600">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;


