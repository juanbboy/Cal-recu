import React from 'react';
import ReactDOM from 'react-dom/client';
import Omm from './components/omm/Omm';
import Navbar from './components/ui/Navbar';
import './index.css';
//import App from './App';
//import Start from './components/start/Start';
import DashboardRouter from './routers/DashboardRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <DashboardRouter />
  </React.StrictMode>
);
