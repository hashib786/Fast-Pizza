import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <header className="flex items-center justify-between border-b border-black bg-yellow-400 p-4 shadow-lg shadow-slate-600">
      <Link to="/" className="font-bold tracking-widest">
        Hashib Pizza Co.
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="w-36 rounded-full bg-transparent bg-yellow-300 px-3 py-2 text-sm transition-all duration-500 placeholder:text-stone-800 focus:outline-none focus:ring focus:ring-yellow-200 active:border-none sm:w-52 sm:focus:w-72"
          type="text"
          placeholder="Enter Order Id..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>
    </header>
  );
};

export default Header;
