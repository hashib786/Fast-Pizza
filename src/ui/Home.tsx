import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div>
      <h1 className="my-6 text-center text-xl font-bold text-yellow-500">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
