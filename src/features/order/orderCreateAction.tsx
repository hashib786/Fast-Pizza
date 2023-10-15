import { ActionFunctionArgs, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import store from "../store";
import { clearItem } from "../cart/cartSlice";

// https://uibakery.io/regex-library/phone-number
export const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export const orderCreateAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const value = Object.fromEntries(data) as {
    phone?: string;
    cart?: string;
    priority?: string;
  };

  // const errors = {} as { phone?: string };
  // if (isValidPhone(value.phone || "")) {
  //   errors.phone = "Invalid phone number";
  // }

  // if (Object.keys(errors).length > 0) return errors;

  const res = await createOrder({
    ...value,
    priority: value.priority === "true",
    cart: JSON.parse(value.cart || ""),
  });

  store.dispatch(clearItem());

  return redirect(`/order/${res.id}`);
};
