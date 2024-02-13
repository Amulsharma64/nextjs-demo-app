import React from 'react';
import Navbar from './components/Header/Navbar.jsx';

export default function Template({ children }) {
    return <div>
        <Navbar />
        {children}
        </div>
  }