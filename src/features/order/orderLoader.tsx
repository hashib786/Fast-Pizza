import { LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

export const orderLoader = async ({ params }: LoaderFunctionArgs) => {
  return await getOrder(params.orderId || "Wrong");
};
