import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
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
    <div>
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.id}></MenuItem>
      ))}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const menuLoader = async () => {
  return await getMenu();
};

export default Menu;
