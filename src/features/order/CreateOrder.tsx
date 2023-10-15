import { Form, useActionData, useNavigation } from "react-router-dom";
import { CartI } from "./Order";
import Button from "../../ui/Button";

const fakeCart: CartI[] = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const [withPriority, setWithPriority] = useState(false);
  // const cart = fakeCart;

  const fromErrors = useActionData() as { phone?: string };

  return (
    <div className="mt-3 p-3 sm:mt-6">
      <h2 className="text-lg font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" className="m-4">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="basis-36">First Name</label>
          <div className="grow">
            <input className="input" type="text" name="customer" required />
          </div>
        </div>

        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="basis-36">Phone number</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
            {fromErrors?.phone ? <p>{fromErrors?.phone}</p> : null}
          </div>
        </div>

        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="basis-36">Address</label>
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
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="text-sm font-semibold" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />

        <div>
          <Button disabled={isSubmitting}>Order now</Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
