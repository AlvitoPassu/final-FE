import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const MainLayout = () => (
  <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
    <Navbar />
    <main className="grow pt-16 md:pt-20">
      <Hero />
      <Features />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<MainLayout />}>
              </Route>
            </Routes>
    </Router>
  );
}

export default App;