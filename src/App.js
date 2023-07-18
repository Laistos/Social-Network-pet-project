import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
