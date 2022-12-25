import * as React from 'react';
import './style.css';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  return <AppRoutes />;
};

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default App;
