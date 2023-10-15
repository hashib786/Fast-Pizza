import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

export interface MenuI {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
}

function Menu() {
  const menu = useLoaderData() as MenuI[];
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 p-2">
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.id}></MenuItem>
      ))}
    </ul>
  );
}

export default Menu;
