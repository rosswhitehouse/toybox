import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import LetterboxdImgGenerator from './routes/LetterboxdImgGenerator.tsx';
import Layout from './components/Layout.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/letterboxd-img" element={<LetterboxdImgGenerator />} />
          </Routes>
        </Layout>
      </HashRouter>
  </StrictMode>,
)
