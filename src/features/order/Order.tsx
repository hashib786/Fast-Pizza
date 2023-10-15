// Test ID: IIDSAT

import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

export interface CartI {
  pizzaId?: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderI {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
  cart: CartI[];
}

function Order() {
  const order = useLoaderData() as OrderI;

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    cart,
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-bold ">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-600 px-2 py-1 text-xs text-red-100">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-600 px-2 py-1 text-xs capitalize text-red-100">
            {status} order
          </span>
        </div>
      </div>

      <div className="my-8 flex flex-wrap items-center justify-between gap-2 bg-stone-300 px-3 py-6">
        <p className="font-bold ">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="list-none divide-y divide-stone-300 border-y border-stone-300">
        {cart.map((item) => (
          <OrderItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="my-8 gap-2 space-y-2 bg-stone-300 px-3 py-6 text-sm">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const orderLoader = async ({ params }: LoaderFunctionArgs) => {
  return await getOrder(params.orderId || "Wrong");
};

export default Order;
