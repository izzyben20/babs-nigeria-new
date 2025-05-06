import { Outlet } from 'react-router-dom';
import { NavHeader } from './NavHeader';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <div className="max-container mx-auto">
      <ScrollToTop />
      <NavHeader />
      <main className="p-0 m-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
