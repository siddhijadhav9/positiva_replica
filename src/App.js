// src/App.js
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// Importing components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="main-wrapper">
        <Navbar />
        <Hero />
        <ServicesSection />
        {/* <Process /> */}
        <ProcessSection/>
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
