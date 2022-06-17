import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Login from './components/sign-in-up/Login';
import Register from './components/sign-in-up/Register';
import { Routes, Route } from 'react-router-dom';
import AppHome from './components/AppHome';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppHome />
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />

      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
