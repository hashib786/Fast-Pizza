import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import {
  decrementItemQuantity,
  incrementItemQuantity,
} from "../cart/cartSlice";

type Props = {
  pizzaId: number;
  quantity: number;
};

const UpdateQuantity = ({ pizzaId, quantity }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="item-center flex gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decrementItemQuantity(pizzaId))}
      >
        -
      </Button>
      <p className="mt-[2.5px] text-sm font-semibold">{quantity}</p>
      <Button
        type="round"
        onClick={() => dispatch(incrementItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateQuantity;
