import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Welcome from './pages/onboarding/Welcome';
import Auth from './pages/onboarding/Auth';
import Assessment from './pages/onboarding/Assessment';
import Dashboard from './pages/dashboard/Dashboard';
import Goals from './pages/goals/Goals';
import Learn from './pages/learn/Learn';
import Resources from './pages/resources/Resources';
import Community from './pages/community/Community';
import Profile from './pages/profile/Profile';
import Assessments from './pages/assessments/Assessments';
import Contact from './pages/contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Welcome /> },
      { path: 'auth', element: <Auth /> },
      { path: 'assessment', element: <Assessment /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'goals', element: <Goals /> },
      { path: 'learn', element: <Learn /> },
      { path: 'resources', element: <Resources /> },
      { path: 'community', element: <Community /> },
      { path: 'profile', element: <Profile /> },
      { path: 'assessments', element: <Assessments /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <TermsOfService /> },
    ]
  }
]);
