import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
import FieldArt from "./FieldArt";

export default function Footer() {
  return (
    <footer className="site-footer">
      <FieldArt />
      <div className="container footer-top">
        <div className="footer-brand">
          <Brand light />
          <p>
            Cultivating excellence in agriculture through sustainable practices
            and innovative solutions.
          </p>
          <span className="footer-tag">
            GOOD SOIL. GOOD PEOPLE. GOOD GROWTH.
          </span>
        </div>
        <div className="footer-nav">
          <h2>Explore</h2>
          {[
            ["Our story", "/about"],
            ["Our crops", "/products"],
            ["Life on the farm", "/gallery"],
            ["Our people", "/team"],
            ["Partnerships", "/partners"],
            ["Contact", "/contact"],
          ].map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
              <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>
        <div className="footer-address">
          <h2>Find us</h2>
          <span className="caption">HEAD OFFICE</span>
          <p>
            186A, Igbosere Rd, Obalende,
            <br />
            Lagos, Nigeria
          </p>
          <span className="caption">OUR FARM</span>
          <p>
            Gwaria Wizi Village, Kaiama LGA,
            <br />
            Kwara State, Nigeria
          </p>
        </div>
        <div className="footer-contact">
          <h2>Stay in touch</h2>
          <a href="mailto:info@ee-agro.com">
            info@ee-agro.com <ArrowUpRight size={14} />
          </a>
          <a href="tel:+2349163563562">+234 916 356 3562</a>
          <a href="tel:+2348133035963">+234 813 303 5963</a>
          <p>
            Mon – Fri · 8am – 5pm
            <br />
            Sat · 9am – 1pm
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} EE Agro Farms Ltd. All rights reserved.
        </span>
        <span>
          From Nigerian soil, with purpose. <span className="footer-dot" />
        </span>
      </div>
    </footer>
  );
}
