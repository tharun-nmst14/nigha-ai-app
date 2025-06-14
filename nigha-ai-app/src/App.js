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
        <div className="feature-card">
          <h3>Real-Time Monitoring</h3>
          <p>Track all AI-generated content and flag risky outputs in real time.</p>
        </div>
        <div className="feature-card">
          <h3>Custom Policy Editor</h3>
          <p>Define and manage your AI safety rules with an intuitive interface.</p>
        </div>
        <div className="feature-card">
          <h3>Incident Reporting</h3>
          <p>Quickly log and manage safety incidents with detailed context and history.</p>
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
