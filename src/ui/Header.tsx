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
    <header className="bg-yellow-500 ">
      <Link to="/" className="tracking-widest">
        Home
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-b-2 bg-transparent"
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
