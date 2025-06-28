
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SosPage from './pages/SosPage';
import VoicePage from './pages/VoicePage';
import GeoPage from './pages/GeoPage';
import IncidentPage from './pages/IncidentPage';
import AnonymousPage from './pages/AnonymousPage';
import ChatbotPage from './pages/ChatbotPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sos" element={<SosPage />} />
          <Route path="/voice" element={<VoicePage />} />
          <Route path="/geo" element={<GeoPage />} />
          <Route path="/incident" element={<IncidentPage />} />
          <Route path="/anonymous" element={<AnonymousPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
