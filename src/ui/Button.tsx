import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type?: string;
};

const Button = ({ children, disabled, to, type = "primary" }: Props) => {
  const base =
    "rounded-full bg-yellow-400 font-semibold uppercase outline-none transition-colors duration-500 ease-in-out hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2";

  const styles = {
    primary: base + " px-4 py-3",
    small: base + " px-4 py-2 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type as keyof typeof styles]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type as keyof typeof styles]}>
      {children}
    </button>
  );
};

export default Button;
