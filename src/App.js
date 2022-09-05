import './App.css';
import { useRoutes, Outlet } from 'react-router-dom'
import Route from './routes/route';

function App() {
  return useRoutes(Route);
}

export default App;
