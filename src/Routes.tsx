import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import getGithubUserInfo from './services/get-github-user-info';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async () => {
      return getGithubUserInfo('marcoskloss');
    },
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
