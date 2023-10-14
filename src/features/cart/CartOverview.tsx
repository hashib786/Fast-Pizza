import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex justify-between bg-stone-900 p-5 text-white">
      <p className="space-x-3">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link
        to="/cart"
        className="text-blue-400 hover:text-blue-500 hover:underline"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
