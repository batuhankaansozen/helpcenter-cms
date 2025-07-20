// src/routes/index.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; // MainLayout'u import ediyoruz
import Home from '../pages/Home';
import DynamicDetailPage from '../pages/DynamicDetailPage';

const router = createBrowserRouter([
  // Ana sayfa için rota
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  // Dinamik detay sayfası için rota
  {
    path: '/:slug',
    element: (
      <MainLayout>
        <DynamicDetailPage />
      </MainLayout>
    ),
  },
  // Sıkça Sorulan Sorular için tekil soru detayı
  {
    path: '/frequently-asked-questions/:questionSlug',
    element: (
      <MainLayout>
        <DynamicDetailPage />
      </MainLayout>
    ),
  },
]);

export default router;
