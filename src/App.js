import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpForm from './Component/Signup';
import Login from './Component/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
