// Import modules from React and the routing library
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import components and pages components
import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Team from './pages/Team.jsx';
//import Fixtures from './pages/Fixtures.jsx';
import ErrorPage from './pages/ErrorPage';

// Create a BrowserRouter and define routes for your app
const router = createBrowserRouter([
  {
    path: '/',
    // App component as the root element
    element: <App />,
    // Displayed in case of routing errors
    errorElement: <ErrorPage />,
    children: [
      {
        // Rendered for the root path '/'
        index: true,
        // Home component rendered as root path
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      },
      {
        // Route for team details with ':id'
        path: '/team/:id',
        // Team component rendered for team details
        element: <Team />
      },
      // {
      //   path: '/fixtures/:id', 
      //   element: <Fixtures /> 
      // },
    ],
  },
]);

// Using ReactDOM to render the app, providing the root element with RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
