import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import getGithubUserInfo from './services/get-github-user-info';
import Post from './pages/Post';
import { getPostById } from './services/search-posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async () => getGithubUserInfo('marcoskloss'),
  },
  {
    path: 'posts/:postId',
    element: <Post />,
    loader: async ({ params }) => getPostById(Number(params.postId)),
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
