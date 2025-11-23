import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Home from './pages/Home';

import Tentang from './pages/Tentang';
import Login from './pages/Login';
import Register from './pages/Register';

import { AuthProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';

import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

import Profile from './pages/Profile';

const MainLayout = () => (
  <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <main className="grow pt-16 md:pt-20">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <AuthProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/tentang" element={<Tentang />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-password" element={<UpdatePassword />} />

              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </AuthProvider>
      </DarkModeProvider>
    </Router>
  );
}

export default App;