import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router'; // <-- Mengimpor konfigurasi rute dari router.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Memberikan konfigurasi rute ke aplikasi */}
        <RouterProvider router={router} />
    </React.StrictMode>
);