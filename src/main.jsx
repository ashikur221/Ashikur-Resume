import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import './index.css'

import router from './routes/BasicRoutes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './authProvider/AuthProvider.jsx';
const queryClient = new QueryClient();



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <div className="w-10/12 mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
