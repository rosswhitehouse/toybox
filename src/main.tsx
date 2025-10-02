import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import About from './routes/About.tsx';
import LetterboxdImgGenerator from './routes/LetterboxdImgGenerator.tsx';
import Layout from './components/Layout.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/letterboxd-img" element={<LetterboxdImgGenerator />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  </StrictMode>,
)
