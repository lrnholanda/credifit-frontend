// src/App.tsx
import React from 'react';
import AppRoutes from '../src/routes/routes'
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes />
    </div>
  );
};

export default App;
