import { Navigate } from 'react-router-dom';
import Dashboard from './components/Auth/Dashboard/Dashboard';
import DashboardHome from './components/Pages/home'
import DashboardGraph from './components/Pages/dashboard';

export const privateRoutes = [
  {
    path: '/',
    element: <Dashboard />,
    children: [
      { path: '', element: <DashboardHome /> }, // Default dashboard page
      { path: 'chart', element: <DashboardGraph /> }
    
    
    ],
  },
];

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with actual auth logic
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

