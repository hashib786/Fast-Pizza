import { formatCurrency } from "../../utils/helpers";
import { CartI } from "./Order";

function OrderItem({ item }: { item: CartI }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="flex flex-wrap items-center justify-between gap-2 px-2 py-3">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
