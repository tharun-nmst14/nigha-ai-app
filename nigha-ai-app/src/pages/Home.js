
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <header className="app-header">
  <img src="/logo.png" alt="NIGHA Logo" className="logo" />
  <h1>NIGHA - AI Safety Monitoring</h1>
    </header>

    <section className="features" id="features">
      <div className="feature-card sos" onClick={() => navigate('/sos')}>
        <h3>SOS Button</h3>
        <p>Instantly send alerts with location and audio when in distress.</p>
      </div>
      <div className="feature-card voice" onClick={() => navigate('/voice')}>
        <h3>Voice Stress Detection</h3>
        <p>AI listens for stress in voice and triggers automatic actions.</p>
      </div>
      <div className="feature-card geo" onClick={() => navigate('/geo')}>
        <h3>Geo-fencing (Google Maps)</h3>
        <p>Alerts you when entering unsafe zones based on real-time data.</p>
      </div>
      <div className="feature-card incident" onClick={() => navigate('/incident')}>
        <h3>Incident Reporting</h3>
        <p>Log and manage safety incidents with full context and history.</p>
      </div>
      <div className="feature-card anonymous" onClick={() => navigate('/anonymous')}>
        <h3>Anonymous Reporting</h3>
        <p>Report issues securely without revealing your identity.</p>
      </div>
      <div className="feature-card chatbot" onClick={() => navigate('/chatbot')}>
        <h3>AI Chatbot</h3>
        <p>Get 24/7 support with our smart assistant trained for emergencies.</p>
      </div>
    </section>
  );
};

export default Home;
