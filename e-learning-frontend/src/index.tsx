import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AutheContext';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId={process.env.CLINET_ID || '905015281066-557kt995ggoch85vi30rlqhvt20cvpcm.apps.googleusercontent.com'}>
    <BrowserRouter>
      <React.StrictMode>
        <AuthProvider>
          <Toaster position="bottom-right" reverseOrder={false}/>
          <App />
        </AuthProvider>
      </React.StrictMode>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

reportWebVitals();
