import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

type Props = {
  pizzaId: number;
};

const DeleteItem = ({ pizzaId }: Props) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Delete
    </Button>
  );
};

export default DeleteItem;
