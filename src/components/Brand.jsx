import { Link } from "react-router-dom";
import LogoColor from "./LogoColor";
import LogoWhite from "./LogoWhite";

export default function Brand({ light = false }) {
  return (
    <Link
      className={`brand ${light ? "brand-light" : ""}`}
      to="/"
      aria-label="EE Agro Farms home"
    >
      <span className="brand-symbol" aria-hidden="true">
        {light ? <LogoWhite /> : <LogoColor />}
      </span>
      <span className="brand-wordmark">
        EE AGRO<span>F A R M S</span>
      </span>
    </Link>
  );
}
