import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Login from './Components/main/login';
import AdminProfile from './Components/admin/profile';
import User from './Components/user';
import Main from './Components/main';
import Admin from './Components/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<Admin/>} path="admin"></Route>
         <Route element={<AdminProfile/>} path="profile"></Route>
         <Route element={<Main/>} path="main"></Route>
         <Route element={<User/>} path="user"></Route>
      </Routes>
    
    
    </BrowserRouter>
    
  );
};

export default App;
