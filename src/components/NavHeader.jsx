import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";

const links = [
  ["Our story", "/about"],
  ["Our crops", "/products"],
  ["The farm", "/gallery"],
  ["Our people", "/team"],
  ["Partners", "/partners"],
];
export function NavHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const dialogRef = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          toggleRef.current,
          ...dialogRef.current.querySelectorAll("a"),
        ];
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = priorOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-note">
        <div className="container">
          <span>Rooted in Nigeria. Growing for tomorrow.</span>
          <a href="mailto:info@ee-agro.com">
            info@ee-agro.com <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <div className="container header-main">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="header-contact" to="/contact">
          Let’s grow together <ArrowUpRight size={17} />
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu" id="mobile-navigation" ref={dialogRef}>
          <nav aria-label="Mobile navigation">
            <NavLink to="/">Home</NavLink>
            {links.map(([label, to], i) => (
              <NavLink key={to} to={to}>
                <span className="menu-number">0{i + 1}</span>
                {label}
                <ArrowUpRight size={22} />
              </NavLink>
            ))}
            <NavLink to="/contact">
              Let’s grow together <ArrowUpRight size={22} />
            </NavLink>
          </nav>
          <div className="mobile-menu-contact">
            <p>From our fields to your business.</p>
            <a href="mailto:info@ee-agro.com">info@ee-agro.com</a>
            <a href="tel:+2349163563562">+234 916 356 3562</a>
          </div>
        </div>
      )}
    </header>
  );
}
