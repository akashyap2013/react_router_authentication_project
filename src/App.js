import './App.css';
import { useRoutes, Outlet } from 'react-router-dom'
import  { 
  LoginPage,
  HomePage,
  HomeContent,
  Dashboard,
  Settings
} from './components/global'

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>,
      children : [
        {
          index: true,
          element : <HomeContent></HomeContent>
        },
        {
          path: "/login",
          element : <LoginPage></LoginPage>
        },
        {
          path: "/dashboard",
          element : <Dashboard></Dashboard>
        },
        {
          path: "/settings",
          element : <Settings></Settings>
        }
      ]
    },
  ]);

  return routes;
}

export default App;
