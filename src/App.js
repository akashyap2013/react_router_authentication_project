import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>Home</div>}></Route>
      <Route path='/login' element={<div>Login</div>}></Route>
      <Route path='/dashboard' element={<div>Dashboard</div>}></Route>
      <Route path='/settings' element={<div>Settings</div>}></Route>
    </Routes>
  );
}

export default App;
