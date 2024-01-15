import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBarComponent from './components/NavBarComponent';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* 👈 Renders at /app/ */}
          <Route path="/about" element={<AboutPage />} /> {/* 👈 Renders at /app/ */}
          <Route path="/contact" element={<ContactPage />} /> {/* 👈 Renders at /app/ */}
          <Route path="/detail/:id" element={<DetailPage />} /> {/* 👈 Renders at /app/ */}
          <Route path="*" element={<NotFoundPage />} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
