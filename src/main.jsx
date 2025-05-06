import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';
import Layout from './components/Layout.jsx';
import { HomePage } from './pages/homepage/HomePage.jsx';
import { Events } from './pages/events/Events.jsx';
import RegistrationForm from './pages/registration/Registration.jsx';
import PartnerShowcasePage from './pages/partners/Partners.jsx';
import LagosStateInfo from './pages/partners/states/Lagos.jsx';
import OsunStateInfo from './pages/partners/states/Osun.jsx';
import KwaraStateInfo from './pages/partners/states/Kwara.jsx';
import PlateauStateInfo from './pages/partners/states/Plateau.jsx';
import EdoStateInfo from './pages/partners/states/Edo.jsx';
import EbonyiStateInfo from './pages/partners/states/Ebonyi.jsx';
import MinistryWomenAffairs from './pages/partners/ministries/Women.jsx';
import MinistryAgriculture from './pages/partners/ministries/agriculture.jsx';
import MinistryLivestock from './pages/partners/ministries/Lvestock.jsx';
import MinistryMarine from './pages/partners/ministries/Marine.jsx';
import MinistryBudgetPlanning from './pages/partners/ministries/Budget.jsx';
import ContactUs from './pages/contact-us/ContactUs.jsx';
import Attendees from './pages/attendees/Attendees.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <Events /> },
      { path: 'registration', element: <RegistrationForm /> },
      {
        path: 'partners',
        element: <PartnerShowcasePage />,
        children: [
          { path: 'lagos', element: <LagosStateInfo /> },
          { path: 'osun', element: <OsunStateInfo /> },
          { path: 'kwara', element: <KwaraStateInfo /> },
          { path: 'plateau', element: <PlateauStateInfo /> },
          { path: 'edo', element: <EdoStateInfo /> },
          { path: 'ebonyi', element: <EbonyiStateInfo /> },
          { path: 'ministry-women-affairs', element: <MinistryWomenAffairs /> },
          {
            path: 'ministry-agriculture-food-security',
            element: <MinistryAgriculture />,
          },
          {
            path: 'ministry-livestock-development',
            element: <MinistryLivestock />,
          },
          { path: 'ministry-marine-blue-economy', element: <MinistryMarine /> },
          {
            path: 'ministry-budget-national-planning',
            element: <MinistryBudgetPlanning />,
          },
        ],
      },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'attendees', element: <Attendees /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
