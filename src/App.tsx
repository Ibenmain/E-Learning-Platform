import React from 'react';
import './App.css';
import Layout from './layouts/layout';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <div className=''>
      <Layout>
        <LandingPage />
      </Layout>
    </div>
  );
}

export default App;
