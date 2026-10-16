import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense } from "react";
import { NavHeader } from "./NavHeader";
import Footer from "./Footer";
import { RevealObserver } from "./Editorial";
import LoadingSpinner from "./LoadingSpinner";

const Layout = () => {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavHeader />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <RevealObserver />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
