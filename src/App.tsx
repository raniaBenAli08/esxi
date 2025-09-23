import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Architecture from './components/Architecture';
import VirtualizationTypes from './components/VirtualizationTypes';
import AdvancedTechniques from './components/AdvancedTechniques';
import KeyFeatures from './components/KeyFeatures';
import Limitations from './components/Limitations';
import Security from './components/Security';
import Comparison from './components/Comparison';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: 'Segoe UI, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
      <Header />
      <main>
        <Hero />
        <History />
        <Architecture />
        <VirtualizationTypes />
        <AdvancedTechniques />
        <KeyFeatures />
        <Limitations />
        <Security />
        <Comparison />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
}

export default App;