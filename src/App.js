import './App.css';
import { useRoutes, Outlet } from 'react-router-dom'

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element : <div>Home <Outlet></Outlet></div>,
      children : [
        {
          index: true,
          element : <div>Home Content</div>
        },
        {
          path: "/login",
          element : <div>Login</div>
        },
        {
          path: "/dashboard",
          element : <div>Dashboard</div>
        },
        {
          path: "/settings",
          element : <div>Settings</div>
        }
      ]
    },
  ]);

  return routes;
}

export default App;
