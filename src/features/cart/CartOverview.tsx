import LinkButton from "../../ui/LinkButton";

function CartOverview() {
  return (
    <div className="flex justify-between bg-stone-900 p-5 text-white">
      <p className="space-x-3">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <LinkButton to="/cart">Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
