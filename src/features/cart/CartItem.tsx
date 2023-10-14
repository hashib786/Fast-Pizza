import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { CartI } from "../order/Order";

function CartItem({ item }: { item: CartI }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="p-2 sm:flex sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-2">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
