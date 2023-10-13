import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-900 p-5 text-center text-white">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
