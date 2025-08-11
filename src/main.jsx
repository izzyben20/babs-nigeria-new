import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';
import Layout from './components/Layout.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/homepage/HomePage.jsx'));
const ContactUs = lazy(() => import('./pages/contact-us/ContactUs.jsx'));
const AboutUs = lazy(() => import('./pages/homepage/about/AboutUs.jsx'));
const ProductsPage = lazy(() => import('./pages/products/ProductPage.jsx'));
const TeamPage = lazy(() => import('./pages/team/TeamPage.jsx'));
const FarmGallery = lazy(() => import('./pages/gallery/FarmGallery.jsx'));
const PartnersPage = lazy(() => import('./pages/partners/Partners.jsx'));
const NotFoundPage = lazy(() => import('./pages/not-found/NotFoundPage.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'gallery', element: <FarmGallery /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'contact', element: <ContactUs /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
