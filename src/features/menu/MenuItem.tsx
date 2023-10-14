import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { MenuI } from "./Menu";

function MenuItem({ pizza }: { pizza: MenuI }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex list-none gap-2 p-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p>{name}</p>
        <p className="text-xs capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-stone-500">Sold out</p>
          )}

          <Button type="small">Add To Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
