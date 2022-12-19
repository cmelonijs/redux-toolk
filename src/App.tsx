import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FieldPage from './features/games/FiledPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FieldPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
