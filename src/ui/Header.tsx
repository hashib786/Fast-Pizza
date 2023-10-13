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
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Order Id..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>
    </div>
  );
};

export default Header;
