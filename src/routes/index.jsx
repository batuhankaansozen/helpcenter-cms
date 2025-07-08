// src/routes/index.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; // MainLayout'u import ediyoruz
import Home from '../pages/Home';
import DynamicDetailPage from '../pages/DynamicDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/:slug',
    element: (
      <MainLayout>
        <DynamicDetailPage />
      </MainLayout>
    ),
  },
]);

export default router;