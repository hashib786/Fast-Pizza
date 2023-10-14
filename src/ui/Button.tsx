import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
};

const Button = ({ children, disabled, to }: Props) => {
  const className =
    "rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase outline-none transition-colors duration-500 ease-in-out hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
