import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TitleList from './components/Modals/TitleLists/TitleList';
import WellbeingList from './components/Modals/WellBeingLists/WellbeingList';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login/Login';
import NewPassword from './pages/Login/NewPassword';
import Overview from './pages/overview/Overview';
import Profile from './pages/profile/Profile';
import Questions from './pages/Questions/Questions';
import Resources from './pages/Resources/Resources';
import Services from './pages/services/Services';
import Surveys from './pages/surveys/Surveys';

const App = () => {
  const { user } = useContext(AuthContext);
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<WellbeingList />}></Route> */}
        <Route path="/" element={user?<Overview />:<Login/>}></Route>
        <Route path="/login" element={ user? <Navigate to="/"/>:<Login />}></Route>
        <Route path="/newPassword" element={ user? <Navigate to="/"/>:<NewPassword />}></Route>
        <Route path="/profile" element={user?<Profile />:<Login/>}></Route>
        <Route path="/services" element={user?<Services />:<Login/>}></Route>
        <Route path="/resources" element={user?<Resources />:<Login/>}></Route>
        <Route path="/surveys" element={user?<Surveys />:<Login/>}></Route>
        <Route path="/questions" element={user?<Questions />:<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
