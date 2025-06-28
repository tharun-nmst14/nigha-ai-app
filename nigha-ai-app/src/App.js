import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>NIGHA - AI Safety Monitoring</h1>
      </header>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <h2>Welcome to NIGHA</h2>
        <p>
          Your companion in ensuring safe, ethical, and secure AI interactions.
          Monitor, manage, and prevent harmful AI behavior with ease.
        </p>
        <button onClick={() => alert('Login/Signup Coming Soon!')}>Get Started</button>
      </section>

      <section className="features" id="features">
        <div className="feature-card sos">
          <h3>SOS Button</h3>
          <p>Instantly send alerts with location and audio when in distress.</p>
        </div>
        <div className="feature-card voice">
          <h3>Voice Stress Detection</h3>
          <p>AI listens for stress in voice and triggers automatic actions.</p>
          <div className="voice-wave">
            <div></div>
          </div>
        </div>
        <div className="feature-card geo">
          <h3>Geo-fencing (Google Maps)</h3>
          <p>Alerts you when entering unsafe zones based on real-time data.</p>
        </div>
        <div className="feature-card incident">
          <h3>Incident Reporting</h3>
          <p>Log and manage safety incidents with full context and history.</p>
        </div>
        <div className="feature-card anonymous">
          <h3>Anonymous Reporting</h3>
          <p>Report issues securely without revealing your identity.</p>
        </div>
        <div className="feature-card chatbot">
          <h3>AI Chatbot</h3>
          <p>Get 24/7 support with our smart assistant trained for emergencies.</p>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About NIGHA</h2>
        <p>
          NIGHA is an AI Safety Monitoring platform designed to give individuals and organizations complete control
          over AI interactions. It ensures responsible AI usage by providing real-time tracking, policy enforcement, 
          and incident management tools.
        </p>
      </section>

      <footer>
        <p>&copy; 2025 NIGHA. All rights reserved.</p>
        <p>Project Lead: Tharun Ajmeera | RGUKT IIIT Basar</p>
      </footer>
    </div>
  );
}

export default App;
