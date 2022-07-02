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
import ServiceList from './components/services/ServiceList';
import ServiceDetail from './components/services/ServiceDetail';
import EditUserInfo from './components/profiles/EditUserInfo';
import BookingInfo from './components/services/BookingInfo';
import ListUser from './components/admin/ListUser';
import ListDoctor from './components/admin/ListDoctor';
import ListService from './components/admin/ListService';
import EditDoctorInfo from './components/profiles/EditDoctorInfo';
import AddDoctor from './components/admin/AddDoctor';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/' element={<AppHome />} />

        <Route path='/login/' element={<Login />} />

        <Route path='/register/' element={<Register />} />

        <Route path='/doctor/' element={<DoctorList />} />

        <Route path='/doctor/detail/:id/' element={<DoctorDetail />} />

        <Route path='/dich-vu/' element={<ServiceList />} />

        <Route path='/chi-tiet-dich-vu/' element={<ServiceDetail />} />

        <Route path='/user/info/' element={<UserInfo />} />

        <Route path='/user/info/edit/' element={<EditUserInfo />} />

        <Route path='/user/calendar/' element={<UserCalendar />} />

        <Route path='/booking-info/:id' element={<BookingInfo />} />

        <Route path='/user/health/' element={<UserHealth />} />

        <Route path='/user/health/:id' element={<UserHealth />} />

        <Route path='/doctor/info/' element={<DoctorInfo />} />

        <Route path='/doctor/info/edit/' element={<EditDoctorInfo />} />

        <Route path='/doctor/calendar' element={<DoctorCalendar />} />

        <Route path='/doctor/add-new-record/:id' element={<AddNewRecord />} />

        <Route path='/admin/*' element={<Admin />}>
          <Route path="list-users/" element={<ListUser />} />

          <Route path="list-doctors/" element={<ListDoctor />} />

          <Route path="add-doctor/" element={<AddDoctor />} />

          <Route path="list-services/" element={<ListService />} />
        </Route>
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
