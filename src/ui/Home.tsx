import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const { userName } = useSelector((state: RootState) => state.user);

  return (
    <div className="text-center">
      <h1 className="my-9 text-center text-xl font-bold text-yellow-500">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      {userName === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu">Continue Order {userName}</Button>
      )}
    </div>
  );
}

export default Home;
