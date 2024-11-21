import React from 'react';
import './App.css';
import Layout from './layouts/layout';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <div className='container mx-auto  '>
      <Layout>
        <LandingPage />
      </Layout>
    </div>
  );
}

export default App;
