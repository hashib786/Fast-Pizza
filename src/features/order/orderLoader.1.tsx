import { LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

// eslint-disable-next-line react-refresh/only-export-components

export const orderLoader = async ({ params }: LoaderFunctionArgs) => {
  return await getOrder(params.orderId || "Wrong");
};
