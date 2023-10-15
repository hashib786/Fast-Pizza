import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const { userName } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="p-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-6">Your cart, {userName}</h2>

      <ul className="my-4 mb-6 divide-y divide-stone-200 border-y border-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-x-3">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={() => dispatch(clearItem())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
