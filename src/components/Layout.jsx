import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NavHeader } from './NavHeader';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="max-container mx-auto">
      <NavHeader />
      <main className="p-0 m-0">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <ToastContainer />
    </div>
  );
};

export default Layout;
