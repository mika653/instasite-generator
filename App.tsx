
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useGenerator } from './context/GeneratorContext';
import { Layout } from './components/Layout';
import IntakeForm from './components/IntakeForm';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const { data } = useGenerator();

  if (!data.isSubmitted) {
    return <IntakeForm />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
