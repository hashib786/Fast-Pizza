import { formatCurrency } from "../../utils/helpers";
import { CartI } from "../order/Order";
import DeleteItem from "./DeleteItem";

function CartItem({ item }: { item: CartI }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="p-2 sm:flex sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-2">
        <p>{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
