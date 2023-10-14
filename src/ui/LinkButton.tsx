import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
  to?: string;
};

const LinkButton = ({ children, to }: Props) => {
  const className = "text-blue-400 hover:text-blue-500 hover:underline";
  const navigate = useNavigate();

  if (to === undefined)
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
