import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TitleList from './components/Modals/TitleLists/TitleList';
import WellbeingList from './components/Modals/WellBeingLists/WellbeingList';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Overview from './pages/overview/Overview';
import Profile from './pages/profile/Profile';
import Questions from './pages/Questions/Questions';
import Resources from './pages/Resources/Resources';
import Services from './pages/services/Services';
import Surveys from './pages/surveys/Surveys';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<WellbeingList />}></Route> */}
        <Route path="/" element={<Overview />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/surveys" element={<Surveys />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
