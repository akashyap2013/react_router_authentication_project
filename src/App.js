import './App.css';
import { useRoutes, Outlet } from 'react-router-dom'
import  { 
  LoginPage,
  HomePage,
  HomeContent,
  Dashboard,
  Settings,
  RequireAuth
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
          element : <RequireAuth><Dashboard /></RequireAuth> 
        },
        {
          path: "/settings",
          element : <RequireAuth><Settings /></RequireAuth>
        }
      ]
    },
  ]);

  return routes;
}

export default App;
