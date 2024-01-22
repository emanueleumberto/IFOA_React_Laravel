import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* 👈 Renders at /app/ */}
          <Route path="/articles" element={<ArticlesPage />} /> {/* 👈 Renders at /app/ */}
          <Route path="/articles/:id" element={<DetailPage />} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
