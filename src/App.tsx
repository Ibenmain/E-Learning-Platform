import React from 'react';
import './App.css';
import Layout from './layouts/layout';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <div className='max-w-[1728px] container mx-auto'>
      <Layout>
        <LandingPage />
      </Layout>
    </div>
  );
}

export default App;
