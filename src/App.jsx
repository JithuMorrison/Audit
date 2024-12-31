import './App.css'
import Home from './common/Home'
import Login from './common/LoginPage';
import RegisterPage from './common/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './users/UserDashboard';
import AdminDashboard from './admin/AdminDashboard';
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/userdash' element={<UserDashboard/>} />
        <Route path='/admindash' element={<AdminDashboard/>} />
      </Routes>
    </Router>
  )
  //this is the main app.jsx where we create our routers and routes
}

export default App
