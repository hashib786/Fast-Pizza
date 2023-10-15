import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import UpdateQuantity from "../menu/UpdateQuantity";
import { CartI } from "../order/Order";
import DeleteItem from "./DeleteItem";
import { getItemInCart } from "./cartSlice";

function CartItem({ item }: { item: CartI }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const getCurrentQuantity = useSelector(getItemInCart(pizzaId));

  return (
    <li className="p-2 sm:flex sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-2 sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>

        <UpdateQuantity pizzaId={pizzaId} quantity={getCurrentQuantity} />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
