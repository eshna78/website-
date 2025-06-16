import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import SuccessStories from './pages/SuccessStories';
import Jobs from './pages/Jobs';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import ConnectingWithAlumni from './pages/ConnectingWithAlumni';
import { RegistrationModal } from './components/RegistrationModal';

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onRegister={() => setIsRegistrationOpen(true)} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onRegister={() => setIsRegistrationOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/membership" element={<Membership onRegister={() => setIsRegistrationOpen(true)} />} />
          <Route path="/connecting-with-alumni" element={<ConnectingWithAlumni />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </div>
  );
}

export default App;