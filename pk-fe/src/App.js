import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Login from './components/sign-in-up/Login';
import Register from './components/sign-in-up/Register';
import { Routes, Route } from 'react-router-dom';
import AppHome from './components/AppHome';
import DoctorList from './components/services/DoctorList';
import DoctorDetail from './components/services/DoctorDetail';
import UserInfo from './components/profiles/UserInfo';
import DoctorInfo from './components/profiles/DoctorInfo';
import UserCalendar from './components/profiles/UserCalendar';
import UserHealth from './components/profiles/UserHealth';
import DoctorCalendar from './components/profiles/DoctorCalendar';
import AddNewRecord from './components/services/AddNewRecord';
import Admin from './components/admin/Admin';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/' element={<AppHome />} />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

        <Route path='/bac-si' element={<DoctorList />} />

        <Route path='/bac-si/chi-tiet' element={<DoctorDetail />} />

        <Route path='/user/info' element={<UserInfo />} />

        <Route path='/user/calendar' element={<UserCalendar />} />

        <Route path='/user/health' element={<UserHealth />} />

        <Route path='/doctor/info' element={<DoctorInfo />} />

        <Route path='/doctor/calendar' element={<DoctorCalendar />} />

        <Route path='/doctor/add-new-record' element={<AddNewRecord />} />

        <Route path='/admin' element={<Admin/>} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
