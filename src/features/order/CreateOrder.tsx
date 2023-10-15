import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getTotalPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import EmptyCart from "../cart/EmptyCart";
import { fetchAddress } from "../user/userSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

function CreateOrder() {
  const { userName } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [withPriority, setWithPriority] = useState(false);
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch =
    useDispatch<ThunkDispatch<AnyAction, AnyAction, AnyAction>>();
  let totalPrice = useSelector(getTotalPrice);
  totalPrice += withPriority ? totalPrice * 0.2 : 0;

  const fromErrors = useActionData() as { phone?: string };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-3 p-3 sm:mt-6">
      <h2 className="text-lg font-semibold">Ready to order? Let's go!</h2>
      <Button type="primary" onClick={() => dispatch(fetchAddress())}>
        Get Position
      </Button>

      <Form method="POST" className="m-4">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-36">First Name</label>
          <div className="grow">
            <input
              className="input"
              type="text"
              defaultValue={userName}
              name="customer"
              required
            />
          </div>
        </div>

        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-36">Phone number</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
            {fromErrors?.phone ? <p>{fromErrors?.phone}</p> : null}
          </div>
        </div>

        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-36">Address</label>
          <div className="grow">
            <input type="text" name="address" required className="input" />
          </div>
        </div>

        <div className="mb-7 flex items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="aspect-[1] w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2"
            value={withPriority + ""}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="text-sm font-semibold" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting
              ? "Creating Order..."
              : `Order now form ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
