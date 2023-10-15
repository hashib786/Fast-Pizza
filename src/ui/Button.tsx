import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  disabled,
  to,
  type = "primary",
  onClick,
}: Props) => {
  const base =
    "text-sm rounded-full bg-yellow-400 font-semibold uppercase outline-none transition-colors duration-500 ease-in-out hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2";

  const styles = {
    primary: base + " px-4 py-3",
    small: base + " px-4 py-2 text-xs",
    secondary:
      "text-sm disabled:cursor-not-allowed rounded-full bg-transparent font-semibold uppercase outline-none transition-colors duration-500 ease-in-out hover:bg-stone-200 focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 px-4 py-3 border border-stone-400",
  };

  if (to)
    return (
      <Link to={to} className={styles[type as keyof typeof styles]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type as keyof typeof styles]}
      >
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type as keyof typeof styles]}>
      {children}
    </button>
  );
};

export default Button;
