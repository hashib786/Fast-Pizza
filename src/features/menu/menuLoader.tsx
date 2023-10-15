import { getMenu } from "../../services/apiRestaurant";

export const menuLoader = async () => {
  return await getMenu();
};
