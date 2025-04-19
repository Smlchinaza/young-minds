import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Welcome from '../pages/onboarding/Welcome';
import Auth from '../pages/onboarding/Auth';
import Assessment from '../pages/onboarding/Assessment';
import Dashboard from '../pages/dashboard/Dashboard';
import Community from '../pages/community/Community';
import Resources from '../pages/resources/Resources';
import Assessments from '../pages/assessments/Assessments';
import Goals from '../pages/goals/Goals';
import Learn from '../pages/learn/Learn';
import Contact from '../pages/contact/Contact';
import Profile from '../pages/profile/Profile';
// import Conference from '../pages/conference/Conference';
// import TherapistDirectory from '../pages/therapist/TherapistDirectory';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Welcome /> },
      { path: '/auth', element: <Auth /> },
      { path: '/assessment', element: <Assessment /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/community', element: <Community /> },
      { path: '/resources', element: <Resources /> },
      { path: '/assessments', element: <Assessments /> },
      { path: '/goals', element: <Goals /> },
      { path: '/learn', element: <Learn /> },
      { path: '/profile', element: <Profile /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);
