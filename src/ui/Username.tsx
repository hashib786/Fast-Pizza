import { useSelector } from "react-redux";

const Username = () => {
  const { userName } = useSelector((state: RootState) => state.user);
  if (!userName) return null;

  return (
    <div className="hidden sm:block">
      <p>{userName}</p>
    </div>
  );
};

export default Username;
